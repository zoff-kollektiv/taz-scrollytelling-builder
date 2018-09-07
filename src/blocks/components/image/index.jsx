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
    const author = data.get('author');
    const caption = data.get('caption');
    const file = data.get('image');
    const attrs = {
      alt,
      src: file.preview,
      className: 'image'
    };

    return (
      <layoutConstraint.Component attributes={{}}>
        <figure>
          <style jsx>{styles}</style>
          {/* eslint-disable-next-lint jsx-a11y/alt-text */}
          <img {...attrs} />

          {(caption || author) && (
            <figcaption>
              {caption}

              {author && <small>{author}</small>}
            </figcaption>
          )}
        </figure>
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
      fields: [
        <InputImage name="image" />,
        <Input name="caption" label="Caption" />,
        <Input name="author" label="Author" />,
        <Input name="alt" label="Alt" />
      ]
    };
  }
};
