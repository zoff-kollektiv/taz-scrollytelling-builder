import React, { Component } from 'react';

import Blocks from './blocks';
import styles from './styles.css';

export default class Toolbar extends Component {
  state = {
    blocksOpen: false
  }

  toggleBlocks = () => {
    this.setState({ blocksOpen: !this.state.blocksOpen });
  }

  onBlockAdd = (type, context) => {
    this.props.onBlockAdd(type, context);
  }

  render() {
    return (
      <div className={styles.toolbar}>
        {this.state.blocksOpen && (
          <div className={styles.blocks}>
            <Blocks onBlockAdd={this.onBlockAdd} />
          </div>
        )}

        <button type="button" className={styles.toggle} onClick={(event => {
          event.preventDefault();
          this.toggleBlocks();
        })}>
          + Add Block
        </button>
      </div>
    )
  }
};
