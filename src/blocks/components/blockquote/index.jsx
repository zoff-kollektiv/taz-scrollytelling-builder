import React from 'react';

import styles from './styles';

export default {
  name: 'blockquote',
  styles,
  defaultContent: 'Add a quote here ...',
  Component: props => (
    <blockquote className="blockquote" {...props.attributes}>
      <style jsx>{styles}</style>
      {props.children}
    </blockquote>
  )
};
