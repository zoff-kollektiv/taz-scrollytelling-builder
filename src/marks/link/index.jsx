import React from 'react';

import BoldIcon from './link.svg';

export default {
  label: 'Link',
  name: 'link',
  Icon: BoldIcon,
  Mark: ({ props, children }) => <a {...props}>{children}</a>,
  serialize: (mark, children) => <a>{children}</a>
};
