import React, { Component, Fragment } from 'react';

import Button from '../../../../form/button';
import Form from '../../../../form';
import Modal from '../../../../modal';
import styles from './styles';

export default class Block extends Component {
  state = {
    modal: null,
    showModal: false
  };

  hideModal = () => {
    this.setState({ showModal: false, modal: null });
  };

  showModal = Content => {
    this.setState({ showModal: true, modal: Content });
  };

  render() {
    const { name, defaultContent = '', onSelect, Icon, onBlockAdd } = this.props;
    const handleSelect = () => {
      if (onSelect) {
        const { fields } = onSelect();
        const buttons = [<Button type="submit">Add block</Button>];
        const onSubmit = formData => {
          const context = {};

          for(const _ of formData.entries()) {
            context[_[0]] = _[1];
          }

          onBlockAdd(name, { ...context });
          this.hideModal();
        };
        this.showModal(
          <Form
            enctype="multipart/form-data"
            fields={fields}
            buttons={buttons}
            onSubmit={onSubmit}
          />
        );
      } else {
        this.onBlockAdd(name, { defaultContent });
      }
    };

    return (
      <Fragment>
        {this.state.showModal && (<Modal>{this.state.modal}</Modal>)}

        <button
          type="button"
          className="block"
          onClick={event => {
            event.preventDefault();
            handleSelect();
          }}
        >
          <style jsx>{styles}</style>
          <span className="block__label">{name}</span>
          {Icon && (
            <Icon
              style={{
                height: '1rem',
                verticalAlign: 'middle',
                width: '1rem'
              }}
            />
          )}
        </button>
      </Fragment>
    );
  }
}
