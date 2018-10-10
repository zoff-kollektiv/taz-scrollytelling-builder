import React from 'react';

import styles from './styles';

export default {
  name: 'blockquote-author',
  Component: ({ attributes, children }) => (
    <p className="author" {...attributes}>
      <style jsx>{styles}</style>
      {children}
    </p>
  )
};
