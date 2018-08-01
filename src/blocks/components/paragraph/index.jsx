import React from 'react';

import styles from './styles';

export default {
  name: 'paragraph',
  styles,
  Component: props => (
    <p className="paragraph" {...props.attributes}>
      <style jsx>{styles}</style>
      {props.children}
    </p>
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
