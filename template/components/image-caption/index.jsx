import React from 'react';

import styles from './styles';

const Caption = ({ children }) => (
  <figcaption className="caption">
    <style jsx>{styles}</style>
    {children}
  </figcaption>
);

export default {
  name: 'image-caption',
  private: true,
  styles,
  Component: ({ node, ...rest }) => <Caption data={node.data} {...rest} />,
  serialize: (node, children) => <Caption data={node.data}>{children}</Caption>
};
