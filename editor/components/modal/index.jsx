import React, { Component } from 'react';
import ReactModal from 'react-modal';

import styles from './styles';

ReactModal.setAppElement('#builder');

export default ({ children }) => (
  <ReactModal isOpen className="modal" overlayClassName="modal-overlay">
    <style jsx>{styles}</style>
    {children}
  </ReactModal>
);
