import React, { Component } from 'react';
import ReactModal from 'react-modal';

import CloseIcon from './times.svg';
import styles from './styles';

ReactModal.setAppElement('#builder');

export default class Modal extends Component {
  state = {
    showModal: true
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { children } = this.props;

    return (
      <ReactModal
        isOpen={this.state.showModal}
        className="modal"
        overlayClassName="modal-overlay"
      >
        <style jsx>{styles}</style>

        <header className="header">
          <button
            type="button"
            className="close"
            onClick={this.handleCloseModal}
          >
            <span className="close__label">Close Modal</span>
            <CloseIcon style={{ height: '1rem', width: '1rem' }} />
          </button>
        </header>

        <div className="content">{children}</div>
      </ReactModal>
    );
  }
}
