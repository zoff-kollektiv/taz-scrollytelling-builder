import classnames from 'classnames';
import React, { Component } from 'react';

import Blocks from './blocks';
import DownloadIcon from './download.svg';
import PlusIcon from './plus.svg';
import UploadIcon from './upload.svg';

import styles from './styles';

export default class Toolbar extends Component {
  state = {
    blocksOpen: false,
    uploadOpen: false
  };

  onBlockAdd = (type, context) => {
    this.props.onBlockAdd(type, context);
  };

  onSave = () => {
    this.props.onSave();
  };

  onUploadSelect = event => {
    const { files } = event.target;
    const reader = new FileReader();

    reader.onload = onLoadEvent => {
      const data = JSON.parse(onLoadEvent.target.result);
      const { onUpload } = this.props;

      onUpload(data);
      this.toggleUpload();
    };

    reader.readAsText(files[0]);
  };

  toggleBlocks = () => {
    this.setState({ blocksOpen: !this.state.blocksOpen });
  };

  toggleUpload = () => {
    this.setState({ uploadOpen: !this.state.uploadOpen });
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

        {this.state.uploadOpen && (
          <input type="file" onChange={event => this.onUploadSelect(event)} />
        )}

        <button
          type="button"
          className="toolbar__upload"
          onClick={event => {
            event.preventDefault();
            this.toggleUpload();
          }}
        >
          <UploadIcon style={{ fill: 'currentColor', height: '1rem', width: '1rem' }} />
        </button>

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
          className={classnames('toolbar__toggle', {
            'toolbar__toggle--is-open': this.state.blocksOpen
          })}
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
