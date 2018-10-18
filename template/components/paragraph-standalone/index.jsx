import React from 'react';

import LayoutConstraint from '../layout-constraint';
import Icon from './paragraph.svg';
import styles from './styles';

const Paragraph = ({ children }) => (
  <LayoutConstraint.Component>
    <p className="paragraph">
      <style jsx>{styles}</style>
      {children}
    </p>
  </LayoutConstraint.Component>
);

export default {
  name: 'paragraph-standalone',
  label: 'Paragraph',
  Icon,
  styles,
  Component: ({ node, ...rest }) => <Paragraph data={node.data} {...rest} />,

  serialize: (node, children) => (
    <Paragraph data={node.data}>{children}</Paragraph>
  )
};
