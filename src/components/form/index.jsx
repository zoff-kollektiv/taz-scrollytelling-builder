import React, { Component } from 'react';

import Group from './group';

class Form extends Component {
  onSubmit = target => this.props.onSubmit(new FormData(target));

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
