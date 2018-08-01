import React from 'react';

import styles from './styles';

export default {
  name: 'paragraph',
  Component: (props) => (
    <p className={styles.p} {...props.attributes}>
      {props.children}
    </p>
  )
};
