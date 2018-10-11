import React from 'react';

import styles from './styles';

const Constraint = ({ attributes = {}, children }) => (
  <div className="layout-constraint" {...attributes}>
    <style jsx>{styles}</style>
    {children}
  </div>
);

export default {
  name: 'layout-constraint',
  private: true,
  styles,
  Component: ({ node = {}, ...rest }) => (
    <Constraint data={node.data} {...rest} />
  ),

  serialize: (node, children) => (
    <Constraint data={node.data}>{children}</Constraint>
  )
};
