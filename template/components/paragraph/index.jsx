import React from 'react';

import Icon from './paragraph.svg';
import styles from './styles';

const Paragraph = ({ attributes = {}, children }) => (
  <p className="paragraph" {...attributes}>
    <style jsx>{styles}</style>
    {children}
  </p>
);

export default {
  name: 'paragraph',
  Icon,
  private: true,
  styles,
  Component: ({ node, ...rest }) => <Paragraph data={node.data} {...rest} />,

  serialize: (node, children) => (
    <Paragraph data={node.data}>{children}</Paragraph>
  )
};
