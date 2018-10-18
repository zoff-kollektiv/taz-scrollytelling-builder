import React, { Component, Fragment } from 'react';

import Button from '../../../form/button';
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

      editor.change(change =>
        change.setNodeByKey(node.key, {
          type: 'image',
          data: { updatedData }
        })
      );
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
    const { editor, node, isFocused, block } = this.props;
    const { canEdit, onSelect } = block;

    return (
      <Fragment>
        <style jsx>{styles}</style>

        {this.state.showModal && <Modal>{this.state.modal}</Modal>}

        {canEdit &&
          isFocused && (
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
          )}

        {onSelect &&
          isFocused && (
            <button
              className="button"
              type="button"
              onClick={event => {
                event.stopPropagation();
                this.onClickEdit();
              }}
            >
              <TrashIcon />
              <span>Edit</span>
            </button>
          )}
      </Fragment>
    );
  }
}
