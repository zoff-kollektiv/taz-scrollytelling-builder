import React from 'react';

import layoutConstraint from '../layout-constraint';
import styles from './styles';

export default {
  name: 'standfirst',
  private: true,
  styles,
  Component: props => (
    <layoutConstraint.Component>
      <p className="standfirst" {...props.attributes}>
        <style jsx>{styles}</style>
        {props.children}
      </p>
    </layoutConstraint.Component>
  ),
  serialize(obj, children) {
    return (
      <layoutConstraint.Component>
        <p className="standfirst">
          <style jsx>{styles}</style>
          {children}
        </p>
      </layoutConstraint.Component>
    );
  }
};
