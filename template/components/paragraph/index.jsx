import React from 'react';

const Paragraph = ({ children }) => <p className="paragraph">{children}</p>;

export default {
  name: 'paragraph',
  private: true,
  canEdit: false,
  Component: ({ node, ...rest }) => <Paragraph data={node.data} {...rest} />,

  serialize: (node, children) => (
    <Paragraph data={node.data}>{children}</Paragraph>
  )
};
