import React, { Component } from 'react';

import Group from './group';

const fileToDataURL = file =>
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
        const promise = fileToDataURL(value).then(dataURL => {
          // we can't keep the original object, because after a re-import of
          // the json this data wouldn't be available
          formData.delete(index);

          formData.set(index, dataURL);
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
