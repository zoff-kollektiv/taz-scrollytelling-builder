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
    const { name, onDropAccepted = () => {} } = this.props;

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
          onDropAccepted={() => onDropAccepted(this.state.files)}
        >
          <button type="button" className="select">
            Select image
          </button>
        </Dropzone>

        {this.state.files.length > 0 && (
          <ul className="file-list">
            {this.state.files.map(_ => (
              <li key={_.name} className="list-item">
                <span className="file-name">{_.name}</span>

                {_.preview && (
                  <img src={_.preview} alt="" className="file-preview" />
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}
