import Dropzone from 'react-dropzone';
import React, { Component } from 'react';

import styles from './styles';
import stylesDropzone from './styles-dropzone';

export default class Field extends Component {
  state = {
    files: []
  };

  onDrop = files => {
    const { onDrop } = this.props;

    this.setState({ files });

    if (onDrop) {
      onDrop(files);
    }
  };

  render() {
    const { label, helpText, name, onDropAccepted = () => {} } = this.props;

    return (
      <div className="input-image">
        <style jsx>{styles}</style>
        <style jsx global>
          {stylesDropzone}
        </style>

        {label && <span className="label">{label}</span>}

        {helpText && (
          <p className="help" dangerouslySetInnerHTML={{ __html: helpText }} />
        )}

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
