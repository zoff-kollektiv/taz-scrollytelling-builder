import React from 'react';

import styles from './styles';

const Author = ({ children }) => (
  <p className="author">
    <style jsx>{styles}</style>
    {children}
  </p>
);

export default {
  name: 'blockquote-author',
  private: true,
  styles,
  Component: ({ node, ...rest }) => <Author data={node.data} {...rest} />,
  serialize: (node, children) => <Author data={node.data}>{children}</Author>
};
