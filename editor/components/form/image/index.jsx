import Dropzone from 'react-dropzone';
import React, { Component } from 'react';

import styles from './styles';
import stylesDropzone from './styles-dropzone';

export default class Field extends Component {
  state = {
    files: []
  };

  onDrop = files => {
    this.setState({ files });
  };

  render() {
    const { name } = this.props;

    return (
      <div className="input-image">
        <style jsx>{styles}</style>
        <style jsx global>
          {stylesDropzone}
        </style>
        <Dropzone
          accept="image/jpeg, image/png"
          onDrop={this.onDrop}
          multiple={false}
          style={{}}
          name={name}
        >
          <button type="button">Select image</button>
          <div className="input-image__meta">
            <p>
              Try dropping some files here. Only *.jpeg and *.png images will be
              accepted.
            </p>
          </div>
        </Dropzone>

        {this.state.files.length > 0 && (
          <div className="input-image__files">
            <h2 className="input-image__files-title">Dropped files</h2>
            <ul className="input-image__files-list">
              {this.state.files.map(_ => (
                <li key={_.name}>
                  {_.name} - {_.size} bytes
                  {_.preview && (
                    <img
                      src={_.preview}
                      alt=""
                      className="input-image__preview"
                    />
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}
