import React, { Fragment } from 'react';

import Input from '../../../components/form/input';
import InputImage from '../../../components/form/image';
import Icon from './image.svg';
import layoutConstraint from '../layout-constraint';
import styles from './styles';

export default {
  name: 'image',
  Icon,
  styles,
  Component(props) {
    const { data } = props.node;
    const alt = data.get('alt');
    const file = data.get('image');
    const attrs = {
      alt,
      src: file.preview,
      className: 'image'
    };

    return (
      <layoutConstraint.Component attributes={{}}>
        <style jsx>{styles}</style>
        {/* eslint-disable-next-lint jsx-a11y/alt-text */}
        <img {...attrs} />
      </layoutConstraint.Component>
    );
  },

  serialize({ data }) {
    const alt = data.get('alt');
    const file = data.get('image');
    const attrs = {
      alt,
      src: file.preview,
      className: 'image'
    };

    return (
      <Fragment>
        <img {...attrs} />
      </Fragment>
    );
  },

  onSelect() {
    return {
      fields: [<InputImage name="image" />, <Input name="alt" label="Alt" />]
    };
  }
};
