import React from 'react';

import Icon from './quote-right.svg';
import styles from './styles';

export default {
  name: 'blockquote',
  Icon,
  styles,
  defaultContent: 'Add a quote here ...',
  Component: props => (
    <blockquote className="blockquote" {...props.attributes}>
      <style jsx>{styles}</style>
      {props.children}
    </blockquote>
  )
};
