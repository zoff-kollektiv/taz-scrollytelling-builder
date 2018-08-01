import React from 'react';

import styles from './styles';

export default {
  name: 'headline-3',
  defaultContent: 'Headline level 3',
  Component: (props) => (
    <h3 className={styles.h3} {...props.attributes}>
      {props.children}
    </h3>
  )
};
