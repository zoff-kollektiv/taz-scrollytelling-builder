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
    const { name, label, onSelect, Icon, onBlockAdd } = this.props;

    const handleSelect = () => {
      if (onSelect) {
        const { fields } = onSelect();
        const buttons = [
          <Button name="submit" type="submit">
            Add block
          </Button>
        ];
        const onSubmit = formData => {
          const context = [...formData.entries()].reduce(
            (acc, [key, value]) => {
              acc[key] = value;
              return acc;
            },
            {}
          );

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
        onBlockAdd(name);
      }
    };

    const onClose = () => {
      onBlockAdd();
    };

    return (
      <Fragment>
        {this.state.showModal && (
          <Modal onClose={onClose}>{this.state.modal}</Modal>
        )}

        <button
          type="button"
          className="block"
          onClick={event => {
            event.preventDefault();
            handleSelect();
          }}
        >
          <style jsx>{styles}</style>
          <span className="block__label">{label || name}</span>
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
