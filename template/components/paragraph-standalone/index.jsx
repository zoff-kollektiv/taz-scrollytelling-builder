import React from 'react';

import LayoutConstraint from '../layout-constraint';
import Icon from './paragraph.svg';
import styles from './styles';

export default {
  name: 'paragraph-standalone',
  Icon,
  styles,
  Component: ({ attributes, children }) => (
    <LayoutConstraint.Component>
      <p className="paragraph" {...attributes}>
        <style jsx>{styles}</style>
        {children}
      </p>
    </LayoutConstraint.Component>
  )
};
