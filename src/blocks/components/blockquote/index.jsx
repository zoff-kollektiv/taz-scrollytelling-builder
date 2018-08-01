import React from 'react';

import styles from './styles';

export default {
  name: 'blockquote',
  defaultContent: 'Add a quote here ...',
  Component: (props) => (
    <blockquote className={styles.blockquote} {...props.attributes}>
      {props.children}
    </blockquote>
  )
};
