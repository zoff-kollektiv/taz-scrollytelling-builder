import React from 'react';

import Icon from './paragraph.svg';
import styles from './styles';

export default {
  name: 'paragraph',
  Icon,
  styles,
  Component: ({ attributes, children }) => (
    <p className="paragraph" {...attributes}>
      <style jsx>{styles}</style>
      {children}
    </p>
  )
};
