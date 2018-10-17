import classnames from 'classnames';
import JSZip from 'jszip';
import React, { Component } from 'react';

import Blocks from './blocks';
import DownloadIcon from './download.svg';
import PlusIcon from './plus.svg';
import UploadIcon from './upload.svg';

import styles from './styles';

export default class Toolbar extends Component {
  uploadRef = React.createRef();

  state = {
    blocksOpen: false
  };

  onSave = () => {
    this.props.onSave();
  };

  onUploadSelect = event => {
    const { files } = event.target;
    const { onUpload } = this.props;
    const upload = files[0];
    const reader = new FileReader();

    reader.onload = onLoadEvent => {
      const { result } = onLoadEvent.target;

      // a zip was was uploaded! unpack and read data.json
      if (result instanceof ArrayBuffer) {
        new JSZip().loadAsync(result).then(zip => {
          const file = zip.file('data.json');

          if (file) {
            file.async('string').then(content => {
              onUpload(JSON.parse(content));
            });
          }
        });
      } else {
        onUpload(JSON.parse(onLoadEvent.target.result));
      }
    };

    switch (upload.type) {
      case 'application/zip':
        reader.readAsArrayBuffer(upload);
        break;
      default:
        reader.readAsText(upload);
    }
  };

  toggleBlocks = () => {
    this.setState(state => ({
      blocksOpen: !state.blocksOpen
    }));
  };

  render() {
    const { AST, onBlockAdd } = this.props;

    return (
      <div className="toolbar">
        <style jsx>{styles}</style>

        {this.state.blocksOpen && (
          <div className="toolbar__blocks">
            <Blocks
              onBlockAdd={(type, context) => {
                this.setState({ blocksOpen: false });

                if (type) {
                  onBlockAdd(type, context);
                }
              }}
              AST={AST}
            />
          </div>
        )}

        <input
          type="file"
          ref={this.uploadRef}
          hidden
          onChange={event => this.onUploadSelect(event)}
        />

        <button
          type="button"
          className="toolbar__upload"
          onClick={event => {
            event.preventDefault();
            // forward the click event to the input field
            this.uploadRef.current.click();
          }}
        >
          <UploadIcon
            style={{ fill: 'currentColor', height: '1rem', width: '1rem' }}
          />
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
