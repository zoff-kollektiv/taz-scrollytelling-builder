import React from 'react';

import Icon from './paragraph.svg';
import styles from './styles';

const ParagraphStandalone = ({ attributes = {}, children }) => (
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
  Component: ({ node, ...rest }) => (
    <ParagraphStandalone data={node.data} {...rest} />
  ),

  serialize: (node, children) => (
    <ParagraphStandalone data={node.data}>{children}</ParagraphStandalone>
  )
};
