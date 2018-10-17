import React from 'react';

import styles from './styles';

const PublicationDate = ({ children }) => (
  <small className="publication-date">
    <style jsx>{styles}</style>
    {children}
  </small>
);

export default {
  name: 'publication-date',
  private: true,
  styles,
  Component: ({ node, ...rest }) => (
    <PublicationDate data={node.data} {...rest} />
  ),
  serialize: (node, children) => (
    <PublicationDate data={node.data}>{children}</PublicationDate>
  )
};
