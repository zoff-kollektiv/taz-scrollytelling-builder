import React from 'react';

import styles from './styles';

export default {
  name: 'headline-3',
  styles,
  defaultContent: 'Headline level 3',
  Component: props => (
    <h3 className="h3" {...props.attributes}>
      <style jsx>{styles}</style>
      {props.children}
    </h3>
  )
};
