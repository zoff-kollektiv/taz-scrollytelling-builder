import React from 'react';

import filename from '../../../editor/lib/filename';

import styles from './styles';

const Intro = ({ data, children, serialize = false }) => {
  const backgroundLandscape = !serialize
    ? data.get('background-image-wide')
    : `./assets/images/${filename(data.get('background-image-wide_name'))}`;

  const backgroundPortrait = !serialize
    ? data.get('background-image-portrait')
    : `./assets/images/${filename(data.get('background-image-portrait_name'))}`;

  return (
    <div
      className="image-container-landscape"
      style={{ backgroundImage: `url(${backgroundLandscape})` }}
    >
      <style jsx>{styles}</style>
      <div
        className="image-container-portrait"
        style={{ backgroundImage: `url(${backgroundPortrait})` }}
      >
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default {
  name: 'intro',
  private: true,
  styles,
  canEdit: false,
  Component: ({ node, ...rest }) => <Intro data={node.data} {...rest} />,

  serialize(node, children) {
    return (
      <Intro data={node.data} serialize>
        {children}
      </Intro>
    );
  }
};
