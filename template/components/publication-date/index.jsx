import React from 'react';

const PublicationDate = ({ attributes = {}, children }) => (
  <small {...attributes}>{children}</small>
);

export default {
  name: 'publication-date',
  private: true,
  Component: ({ node, ...rest }) => <PublicationDate data={node.data} {...rest} />,
  serialize: (node, children) => <PublicationDate data={node.data}>{children}</PublicationDate>
};
