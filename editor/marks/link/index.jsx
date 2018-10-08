import React from 'react';

import LinkIcon from './link.svg';

export default {
  label: 'Link',
  name: 'link',
  Icon: LinkIcon,
  Mark: ({ props, children }) => <a {...props}>{children}</a>,
  serialize: (mark, children) => <a>{children}</a>
};
