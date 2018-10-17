import React from 'react';

import styles from './styles';

const Title = ({ children }) => (
  <h1 className="title">
    <style jsx>{styles}</style>
    {children}
  </h1>
);

export default {
  name: 'title',
  private: true,
  styles,

  Component: ({ node, ...rest }) => <Title data={node.data} {...rest} />,
  serialize: (node, children) => <Title data={node.data}>{children}</Title>
};
