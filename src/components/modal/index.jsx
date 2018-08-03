import React, { Component } from 'react';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#builder');

export default class Modal extends Component {
  render() {
    const { children } = this.props;

    return (
      <ReactModal
        isOpen
        onAfterOpen={this.afterOpenModal}
        onRequestClose={this.closeModal}
      >
        {children}
      </ReactModal>
    );
  }
}
