import React from 'react';

export default {
  label: 'Bold',
  name: 'bold',
  Mark: ({ props, children }) => <strong {...props}>{children}</strong>,
  serialize: (mark, children) => <strong>{children}</strong>
};
