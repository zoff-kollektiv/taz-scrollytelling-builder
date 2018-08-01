import JSZip from 'jszip';
import React, { Component, Fragment } from 'react';
import { Editor as SlateEditor } from 'slate-react';
import { saveAs } from 'file-saver/FileSaver';
import { Value } from 'slate';

import { findBlockByName } from '../../blocks';
import initialData from './data';
import { serialize as serializeHTML } from './serialize-html';
import styles from './styles.css';
import Toolbar from './toolbar';

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
    const assets = zip.folder('assets');

    const images = assets.folder('images');
    const styles = assets.folder('styles');

    zip.file('story.html', serializeHTML(value));
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

  render() {
    return (
      <Fragment>
        <div className={styles.editor}>
          <SlateEditor
            spellCheck={false}
            value={this.state.value}
            onChange={this.onChange}
            renderNode={this.renderNode}
          />
        </div>

        <div className={styles.toolbar}>
          <Toolbar
            onSave={() => this.onSave()}
            onBlockAdd={(type, context) => this.insertBlock(type, context)}
          />
        </div>
      </Fragment>
    );
  }
}
