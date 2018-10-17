import React from 'react';

import styles from './styles';

const Constraint = ({ children }) => (
  <div className="layout-constraint">
    <style jsx>{styles}</style>
    {children}
  </div>
);

export default {
  name: 'layout-constraint',
  private: true,
  styles,
  canEdit: false,
  Component: ({ node = {}, ...rest }) => (
    <Constraint data={node.data} {...rest} />
  ),

  serialize: (node, children) => (
    <Constraint data={node.data}>{children}</Constraint>
  )
};
