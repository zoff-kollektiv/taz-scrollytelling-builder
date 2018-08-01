import React, { Component, Fragment } from 'react';
import { Editor as SlateEditor } from 'slate-react';
import { Value } from 'slate';

import { findBlockByName } from '../../blocks';
import data from './data';
import styles from './styles';
import Toolbar from './toolbar';

export default class Editor extends Component {
  state = {
    value: Value.fromJSON(data),
  }

  onChange = ({ value }) => {
    console.log(value.toJSON());
    this.setState({ value });
  }

  renderNode = props => {
    const { type } = props.node;
    const { Component } = findBlockByName(type);
    
    if (!Component) {
      return null;
    }

    return (
      <Component {...props} />
    )
  }

  insertBlock = (type, context) => {
    console.log('insert block!', type, context);

    const change = this.state.value.change().call((change, text, target) => {
      if (target) {
        change.select(target)
      }
    
      change
        .call(() => { change.insertBlock(type) })
        .insertText(context.defaultContent);
    }, context);

    this.onChange(change);
  }

  render() {
    return (
      <Fragment>
        <div className={styles.editor}>
          <SlateEditor
            value={this.state.value}
            onChange={this.onChange}
            renderNode={this.renderNode} />
        </div>

        <div className={styles.toolbar}>
          <Toolbar onBlockAdd={(type, context) => this.insertBlock(type, context)} />
        </div>
      </Fragment>
    )
  }
}
