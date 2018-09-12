import React, { Component } from 'react';

import Group from './group';

const fileToBase64 = file =>
  new Promise(resolve => {
    const reader = new window.FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      resolve(reader.result);
    };
  });

class Form extends Component {
  onSubmit = target => {
    const formData = new FormData(target);
    const filePromises = [];

    // TODO: this is not pretty, how can I write this better?
    for (const pair of formData.entries()) {
      const [index, value] = pair;

      if (value instanceof File) {
        const promise = fileToBase64(value).then(base64 => {
          formData.delete(index);
          formData.set(`${index}_origFile`, value);
          formData.set(`${index}_base64`, base64);
          formData.set(`${index}_name`, value.name);
        });

        filePromises.push(promise);
      }
    }

    Promise.all(filePromises).then(() => {
      this.props.onSubmit(formData);
    });
  };

  render() {
    const { enctype, buttons, fields } = this.props;

    return (
      <form
        encType={enctype}
        onSubmit={event => {
          event.preventDefault();
          this.onSubmit(event.target);
        }}
      >
        {fields.map(_ => (
          <Group>{_}</Group>
        ))}

        {buttons.map(Button => Button)}
      </form>
    );
  }
}

Form.defaultProps = {
  enctype: null,
  fields: [],
  button: [],
  onSubmit() {}
};

export default Form;
