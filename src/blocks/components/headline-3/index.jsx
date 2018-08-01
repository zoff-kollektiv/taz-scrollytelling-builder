import React from 'react';

import Icon from './heading.svg';
import styles from './styles';

export default {
  name: 'headline-3',
  Icon,
  styles,
  defaultContent: 'Headline level 3',
  Component: props => (
    <h3 className="h3" {...props.attributes}>
      <style jsx>{styles}</style>
      {props.children}
    </h3>
  )
};
