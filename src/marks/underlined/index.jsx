import React from 'react';

export default {
  label: 'Underlined',
  name: 'underlined',
  Mark: ({ props, children }) => <u {...props}>{children}</u>,
  serialize: (block, children) => <u>{children}</u>
};
