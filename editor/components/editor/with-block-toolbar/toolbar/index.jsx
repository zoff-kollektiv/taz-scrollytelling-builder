import classnames from 'classnames';
import React, { Component } from 'react';

import Button from '../../../form/button';
import EditIcon from './edit.svg';
import Form from '../../../form';
import Modal from '../../../modal';
import styles from './styles';
import TrashIcon from './trash.svg';

const removeBlock = (editor, key) =>
  editor.change(change => change.removeNodeByKey(key));

export default class Toolbar extends Component {
  state = {
    modal: null,
    showModal: false
  };

  onClickEdit = () => {
    const { editor, node, block } = this.props;
    const { type } = node;

    const { data } = node.toJSON();
    const { fields } = block.onSelect(data);

    const onSubmit = formData => {
      const updatedData = [...formData.entries()].reduce(
        (acc, [key, value]) => {
          acc[key] = value;
          return acc;
        },
        {}
      );

      editor.removeNodeByKey(node.key);

      if (block.insert) {
        block.insert(editor, updatedData);
      } else {
        editor.insertBlock({
          type,
          data: updatedData
        });
      }

      this.hideModal();
    };

    const buttons = [
      <Button name="submit" type="submit">
        Update block
      </Button>
    ];

    this.showModal(
      <Form
        enctype="multipart/form-data"
        fields={fields}
        buttons={buttons}
        onSubmit={onSubmit}
      />
    );
  };

  hideModal = () => {
    this.setState({ showModal: false, modal: null });
  };

  showModal = Content => {
    this.setState({ showModal: true, modal: Content });
  };

  render() {
    const { editor, node, block, visible = false } = this.props;
    const { label, name, onSelect } = block;

    return (
      <div
        readOnly
        className={classnames('toolbar', { 'toolbar--is-visible': visible })}
      >
        <style jsx>{styles}</style>

        {!block.private && (
          <strong className="block-label">{label || name}</strong>
        )}

        {this.state.showModal && (
          <Modal onClose={() => this.hideModal()}>{this.state.modal}</Modal>
        )}

        <button
          className="button"
          type="button"
          onClick={event => {
            event.stopPropagation();
            removeBlock(editor, node.key);
          }}
        >
          <TrashIcon />
          <span>Delete</span>
        </button>

        {onSelect && (
          <button
            className="button"
            type="button"
            onClick={event => {
              event.stopPropagation();
              this.onClickEdit();
            }}
          >
            <EditIcon />
            <span>Edit</span>
          </button>
        )}
      </div>
    );
  }
}
