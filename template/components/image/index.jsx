import React, { Fragment } from 'react';

import filename from '../../../editor/lib/filename';
import Input from '../../../editor/components/form/input';
import InputImage from '../../../editor/components/form/image';
import Icon from './image.svg';
import layoutConstraint from '../layout-constraint';
import styles from './styles';

const Image = ({ data, attributes = {}, children }) => {
  const alt = data.get('alt');
  const author = data.get('author');
  const caption = data.get('caption');
  const file = data.get('image');
  const attrs = {
    alt,
    src: file,
    className: 'image'
  };

  return (
    <figure {...attributes}>
      <style jsx>{styles}</style>

      <layoutConstraint.Component>
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <img {...attrs} />

        {(caption || author) && (
          <figcaption>
            {caption}

            {author && <small>{author}</small>}
          </figcaption>
        )}

        {children}
      </layoutConstraint.Component>
    </figure>
  );
};

export default {
  name: 'image',
  Icon,
  styles,
  Component: ({ node, ...rest }) => <Image data={node.data} {...rest} />,

  serialize({ data }) {
    const alt = data.get('alt') || '';
    const name = data.get('image_name');
    const src = `./assets/images/${filename(name)}`;
    const attrs = {
      alt,
      src,
      className: 'image'
    };

    return (
      <Fragment>
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <img {...attrs} />
      </Fragment>
    );
  },

  extract({ data }) {
    const file = data.get('image');
    const name = data.get('image_name');

    return Promise.resolve([
      {
        name,
        file,
        type: 'image'
      }
    ]);
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
