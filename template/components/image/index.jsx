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

const Image = ({ data, attributes = {}, children, serialize = false }) => {
  const alt = data.get('alt') || '';
  const type = data.get('type');
  const width = data.get('image_width');
  const height = data.get('image_height');
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
      {...attributes}
    >
      <style jsx>{styles}</style>

      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <img {...attrs} />

      <layoutConstraint.Component>
        <div className="caption-container">{children}</div>
      </layoutConstraint.Component>
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
  },

  insert(change, data) {
    // pass data to block
    BLOCK_DEFINITION.data = data;

    change.insertBlock(BLOCK_DEFINITION);
  }
};
