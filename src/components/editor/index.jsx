import JSZip from 'jszip';
import React, { Component, Fragment } from 'react';
import { Editor as SlateEditor } from 'slate-react';
import { saveAs } from 'file-saver/FileSaver';
import { Value } from 'slate';

import { blocks, findBlockByName } from '../../blocks';
import initialData from './data';
import { marks } from '../../marks';
import { serialize as serializeHTML } from './serialize-html';
import styles from './styles';
import Toolbar from './toolbar';
import ToolbarMarks from './toolbar-marks';

export default class Editor extends Component {
  state = {
    value: Value.fromJSON(initialData)
  };

  onChange = ({ value }) => {
    this.setState({ value });
  };

  onSave = () => {
    const { value } = this.state;
    const zip = new JSZip();
    let html = serializeHTML(value);

    // collect styles
    const blockStypes = blocks.map(_ => _.styles && _.styles.__scoped);

    // replace [styles] placeholder with actual styles
    html = html.replace('[styles]', blockStypes.join(''));

    zip.file('story.html', html);
    zip.file('story.json', JSON.stringify(value));

    zip.generateAsync({ type: 'blob' }).then(file => saveAs(file, 'story.zip'));
  };

  insertBlock = (type, data) => {
    const change = this.state.value.change().call((change, target) => {
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
    const { Component } = findBlockByName(type);

    if (!Component) {
      return null;
    }

    return <Component {...props} />;
  };

  renderMark = props => {
    const { children, mark, attributes } = props;
    const { Mark } = marks.find(_ => _.name === mark.type);

    return <Mark {...attributes}>{children}</Mark>;
  };

  render() {
    return (
      <Fragment>
        <style jsx>{styles}</style>

        <div className="editor">
          <div className="editor__toolbar-marks">
            <ToolbarMarks
              marks={marks}
              onClick={() => {
                const { value } = this.state;
                const change = value.change().toggleMark('bold');
                this.onChange(change);
              }}
            />
          </div>

          <SlateEditor
            spellCheck={false}
            value={this.state.value}
            onChange={this.onChange}
            renderNode={this.renderNode}
            renderMark={this.renderMark}
          />
        </div>

        <div className="editor__toolbar">
          <Toolbar
            AST={this.state.value.toJSON()}
            onSave={() => this.onSave()}
            onBlockAdd={(type, context) => this.insertBlock(type, context)}
          />
        </div>
      </Fragment>
    );
  }
}
