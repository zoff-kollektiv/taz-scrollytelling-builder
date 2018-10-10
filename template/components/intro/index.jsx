import React from 'react';

import filename from '../../../editor/lib/filename';

import styles from './styles';

const Intro = ({ data, attributes = {}, children, serialize = false }) => {
  const imageAttrs = {
    className: 'background-image'
  };

  if (!serialize) {
    imageAttrs.src = data.get('background-image');
  } else {
    const name = data.get('background-image_name');
    imageAttrs.src = `./assets/images/${filename(name)}`;
  }

  return (
    <div className="image-container" {...attributes}>
      <style jsx>{styles}</style>

      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      {imageAttrs.src && <img {...imageAttrs} />}

      <div className="content">{children}</div>
    </div>
  );
};

export default {
  name: 'intro',
  private: true,
  styles,
  Component: ({ node, ...rest }) => <Intro data={node.data} {...rest} />,

  insert(change, data) {
    BLOCK_DEFINITION.data = data;

    // if a title was set, already prefill it
    if (data.title) {
      BLOCK_DEFINITION.nodes[1].nodes[0].text = data.title;
    }

    // Always add the intro of the beginning of the document
    change.insertBlock(BLOCK_DEFINITION);
  },

  serialize(node, children) {
    return <Intro data={node.data} serialize={true}>{children}</Intro>;
  }
};
