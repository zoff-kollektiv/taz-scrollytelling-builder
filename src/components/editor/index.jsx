import React, { Component, Fragment } from 'react';
import { Editor as SlateEditor } from 'slate-react';
import { Value } from 'slate';

import { findBlockByName } from '../../blocks';
import initialData from './data';
import downloadFile from '../../lib/download-file';
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
    // download html file which contains the story
    downloadFile('story.html', serializeHTML(this.state.value));
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
