import React from 'react';

import styles from './styles';

const Authors = ({ data, attributes = {}, children }) => (
  <p className="authors" {...attributes}>
    <style jsx>{styles}</style>

    {children}
  </p>
);

export default {
  name: 'authors',
  private: true,
  styles,
  Component: ({ node, ...rest }) => <Authors data={node.data} {...rest} />
};
