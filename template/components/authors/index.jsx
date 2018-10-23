import React from 'react';

import LayoutConstraint from '../layout-constraint';
import styles from './styles';

const Authors = ({ children }) => (
  <LayoutConstraint.Component>
    <p className="authors">
      <style jsx>{styles}</style>

      {children}
    </p>
  </LayoutConstraint.Component>
);

export default {
  name: 'authors',
  private: true,
  styles,
  Component: ({ node, ...rest }) => <Authors data={node.data} {...rest} />,

  serialize(node, children) {
    return (
      <Authors data={node.data} serialize>
        {children}
      </Authors>
    );
  }
};
