import classnames from 'classnames';
import React from 'react';

import filename from '../../../editor/lib/filename';
import Input from '../../../editor/components/form/input';
import InputImage from '../../../editor/components/form/image';
import Icon from './image.svg';
import layoutConstraint from '../layout-constraint';
import Radio from '../../../editor/components/form/radio';
import styles from './styles';

const Image = ({ data, attributes = {}, children, serialize = false }) => {
  const alt = data.get('alt') || '';
  const caption = data.get('caption');
  const type = data.get('type');
  let src;

  if (!serialize) {
    src = data.get('image');
  } else {
    src = `./assets/images/${filename(data.get('image_name'))}`;
  }

  const attrs = {
    alt,
    src,
    className: 'image'
  };

  return (
    <figure
      className={classnames('figure', { [`figure--is-${type}`]: true })}
      {...attributes}
    >
      <style jsx>{styles}</style>

      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <img {...attrs} />

      {caption && (
        <layoutConstraint.Component>
          <figcaption className="caption">{caption}</figcaption>
        </layoutConstraint.Component>
      )}

      {children}
    </figure>
  );
};

export default {
  name: 'image',
  label: 'Image',
  Icon,
  styles,
  Component: ({ node, ...rest }) => <Image data={node.data} {...rest} />,

  serialize: (node, children) => (
    <Image data={node.data} serialize>
      {children}
    </Image>
  ),

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
        <Input name="alt" label="Alt" />,
        <Radio
          name="type"
          label="Size"
          choices={[
            ['constraint', 'Same as content'],
            ['wide', 'Wider as content'],
            ['full', 'Full width']
          ]}
        />
      ]
    };
  }
};
