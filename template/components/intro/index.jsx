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

  serialize(node, children) {
    return (
      <Intro data={node.data} serialize>
        {children}
      </Intro>
    );
  }
};
