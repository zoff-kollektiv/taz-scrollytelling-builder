import React from 'react';

import UnderlineIcon from './underline.svg';

export default {
  label: 'Underlined',
  name: 'underlined',
  Icon: UnderlineIcon,
  Mark: props => <u>{props.children}</u>,
  serialize: (node, children) => <u>{children}</u>
};
