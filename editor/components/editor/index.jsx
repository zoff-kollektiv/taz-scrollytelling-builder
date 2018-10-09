import JSZip from 'jszip';
import React, { Component, Fragment } from 'react';
import { Editor as SlateEditor } from 'slate-react';
import { saveAs } from 'file-saver';
import slugify from 'slugify';
import { Value } from 'slate';

import { blocks, findBlockByName } from '../../../template';
import filename from '../../lib/filename';
import { serialize as extractAssets } from './extract-assets';
import { findMarkByName, marks } from '../../marks';
import { serialize as serializeHTML } from './serialize-html';
import styles from './styles';
import Toolbar from './toolbar';
import ToolbarMarks from './toolbar-marks';

const dataURLtoBlob = dataurl => {
  const arr = dataurl.split(',');
  const mime = arr[0].match(/:(.*?);/)[1];
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  return new Blob([u8arr], { type: mime });
};

export default class Editor extends Component {
  elRefs = {
    toolbarMarkRef: React.createRef()
  };

  componentDidMount = () => {
    this.updateMenuPosition();
  };

  componentDidUpdate = () => {
    this.updateMenuPosition();
  };

  onChange = ({ value }) => {
    this.props.update({ value });
  };

  onSave = () => {
    const { value } = this.props.state;
    const zip = new JSZip();
    const assetsFolder = zip.folder('assets');

    let html = serializeHTML(value);
    const assets = extractAssets(value);

    const fileName = slugify(this.props.metadata.title || 'story', {
      remove: /[*+~.()'"!:@/\\]/g
    });

    Promise.all(assets)
      // each block could return several files
      .then(_ => _.flat())
      .then(files => {
        files.forEach(({ name, file, type, options = {} }) => {
          const folders = {};
          const fileBlob = file instanceof Blob ? file : dataURLtoBlob(file);

          if (!folders[type]) {
            folders[type] = assetsFolder.folder(`${type}s`);
          }

          folders[type].file(filename(name), fileBlob, options);
        });

        // collect styles
        /* eslint-disable-next-line no-underscore-dangle */
        const blockStypes = blocks.map(_ => _.styles && _.styles.__scoped);

        // replace [styles] placeholder with actual styles
        html = html.replace('[styles]', blockStypes.join(''));

        zip.file('index.html', html);
        zip.file('story.json', JSON.stringify(this.props.state));

        zip
          .generateAsync({ type: 'blob' })
          .then(file => saveAs(file, `${fileName}.zip`));
      });
  };

  updateMenuPosition = () => {
    const { current } = this.elRefs.toolbarMarkRef;

    if (!current) {
      return;
    }

    const { value } = this.props.state;
    const { fragment, selection } = value;

    if (selection.isBlurred || selection.isCollapsed || fragment.text === '') {
      current.style.opacity = 0;
      return;
    }

    const windowSelection = window.getSelection();
    const range = windowSelection.getRangeAt(0);
    const rect = range.getBoundingClientRect();

    const { top, left, width } = rect;
    const { pageYOffset, pageXOffset } = window;
    const { offsetHeight, offsetWidth } = current;

    current.style.opacity = 1;
    current.style.top = `${top + pageYOffset - offsetHeight}px`;
    current.style.left = `${left +
      pageXOffset -
      offsetWidth / 2 +
      width / 2}px`;
  };

  insertBlock = (type, data) => {
    const change = this.props.state.value.change().call((change, target) => {
      if (target) {
        change.select(target);
      }

      change.call(() => {
        change.insertBlock({
          type,
          data
        });
      });

      // apply defined default content
      if (data.defaultContent) {
        change.insertText(data.defaultContent);
      }
    }, data);

    this.onChange(change);
  };

  renderNode = props => {
    const { type } = props.node;

    /* eslint-disable-next-line no-shadow */
    const { Component } = findBlockByName(type);

    // Maybe the mark is an inline and therefore falls under renderNode (e.g. links)
    if (!Component) {
      const { Mark } = findMarkByName(type);

      if (Mark) {
        return <Mark {...props} />;
      }

      return null;
    }

    return <Component {...props} />;
  };

  renderMark = props => {
    const { mark } = props;
    const { Mark } = findMarkByName(mark.type);

    if (!Mark) {
      return null;
    }

    return <Mark {...props} />;
  };

  render() {
    const { value } = this.props.state;

    return (
      <Fragment>
        <style jsx>{styles}</style>

        <div className="editor">
          <div
            className="editor__toolbar-marks"
            ref={this.elRefs.toolbarMarkRef}
          >
            <ToolbarMarks update={this.onChange} state={value} marks={marks} />
          </div>

          <SlateEditor
            spellCheck={false}
            value={value}
            onChange={this.onChange}
            renderNode={this.renderNode}
            renderMark={this.renderMark}
          />
        </div>

        <div className="editor__toolbar">
          <Toolbar
            AST={value.toJSON()}
            onSave={() => this.onSave()}
            onBlockAdd={(type, context) => this.insertBlock(type, context)}
            onUpload={data => {
              this.props.update({ value: Value.fromJSON(data) });
            }}
          />
        </div>
      </Fragment>
    );
  }
}
