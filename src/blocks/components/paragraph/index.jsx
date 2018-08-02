import React from 'react';

import Icon from './paragraph.svg';
import layoutConstraint from '../layout-constraint';
import styles from './styles';

export default {
  name: 'paragraph',
  Icon,
  styles,
  Component: props => (
    <layoutConstraint.Component attributes={{}}>
      <p className="paragraph" {...props.attributes}>
        <style jsx>{styles}</style>
        {props.children}
      </p>
    </layoutConstraint.Component>
  ),
  serialize(obj, children) {
    return (
      <p className="paragraph">
        <style jsx>{styles}</style>
        {children}
      </p>
    );
  }
};
