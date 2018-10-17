import React from 'react';

import filename from '../../../editor/lib/filename';

import styles from './styles';

const Intro = ({ data, children, serialize = false }) => {
  const backgroundUrl = !serialize
    ? data.get('background-image')
    : `./assets/images/${filename(data.get('background-image_name'))}`;

  return (
    <div
      className="image-container"
      style={{ backgroundImage: `url(${backgroundUrl})` }}
    >
      <style jsx>{styles}</style>

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
