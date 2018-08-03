import React, { Component } from 'react';

import Blocks from './blocks';
import DownloadIcon from './download.svg';
import PlusIcon from './plus.svg';
import styles from './styles';

export default class Toolbar extends Component {
  state = {
    blocksOpen: false
  };

  onBlockAdd = (type, context) => {
    this.props.onBlockAdd(type, context);
  };

  onSave = () => {
    this.props.onSave();
  };

  toggleBlocks = () => {
    this.setState({ blocksOpen: !this.state.blocksOpen });
  };

  render() {
    const { AST } = this.props;

    return (
      <div className="toolbar">
        <style jsx>{styles}</style>

        {this.state.blocksOpen && (
          <div className="toolbar__blocks">
            <Blocks onBlockAdd={this.onBlockAdd} AST={AST} />
          </div>
        )}

        <button
          type="button"
          className="toolbar__save"
          onClick={event => {
            event.preventDefault();
            this.onSave();
          }}
        >
          <DownloadIcon style={{ height: '1rem', width: '1rem' }} />
        </button>

        <button
          type="button"
          className="toolbar__toggle"
          onClick={event => {
            event.preventDefault();
            this.toggleBlocks();
          }}
        >
          <PlusIcon style={{ height: '1rem', width: '1rem' }} />
        </button>
      </div>
    );
  }
}
