import React from 'react';

import layoutConstraint from '../layout-constraint';
import styles from './styles';

const Standfirst = ({ children }) => (
  <layoutConstraint.Component>
    <p className="standfirst">
      <style jsx>{styles}</style>
      {children}
    </p>
  </layoutConstraint.Component>
);

export default {
  name: 'standfirst',
  private: true,
  styles,
  Component: ({ node, ...rest }) => <Standfirst data={node.data} {...rest} />,
  serialize: (node, children) => (
    <Standfirst data={node.data}>{children}</Standfirst>
  )
};
