import classnames from 'classnames';
import React from 'react';

import filename from '../../../editor/lib/filename';
import Input from '../../../editor/components/form/input';
import InputImage from '../../../editor/components/form/image';
import Icon from './image.svg';
import layoutConstraint from '../layout-constraint';
import Radio from '../../../editor/components/form/radio';
import styles from './styles';

const BLOCK_DEFINITION = {
  object: 'block',
  type: 'image',
  nodes: [
    {
      object: 'block',
      type: 'image-caption',
      nodes: [
        {
          object: 'text',
          leaves: [
            {
              text: 'Caption'
            }
          ]
        }
      ]
    }
  ]
};

const Image = ({ data, children, serialize = false, isFocused }) => {
  const alt = data.get('alt') || '';
  const type = data.get('type');
  const width = parseInt(data.get('image_width'), 10);
  const height = parseInt(data.get('image_height'), 10);
  const isPortraitSize = height > width;

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
      className={classnames(
        'figure',
        { [`figure--is-${type}`]: true },
        { [`figure--dimension-landscape`]: !isPortraitSize },
        { [`figure--dimension-portrait`]: isPortraitSize }
      )}
      selected={isFocused}
    >
      <style jsx>{styles}</style>

      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <img {...attrs} />

      <layoutConstraint.Component>{children}</layoutConstraint.Component>
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

  onSelect({ alt, type }) {
    return {
      fields: [
        <InputImage
          name="image"
          label="Image"
          helpText={`
          The image should have at lease the following width:<br/><br/>

          - Content: 800px<br/>
          - Wide: 950px<br/>
          - Full: 1280px<br/><br/>

          In order to load the image fast, filesize
          is quite important. Please make sure the image is optimized - you can
          e.g. use a service like https://tinypng.com.
        `}
        />,
        <Input name="alt" label="Alt" defaultValue={alt} />,
        <Radio
          name="type"
          label="Size"
          defaultValue={type}
          choices={[
            ['constraint', 'Same as content'],
            ['wide', 'Wider as content'],
            ['full', 'Full width']
          ]}
        />
      ]
    };
  },

  insert(editor, data) {
    // pass data to block
    BLOCK_DEFINITION.data = data;

    editor.insertBlock(BLOCK_DEFINITION);
  }
};
