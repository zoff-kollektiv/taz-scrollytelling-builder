import React from 'react';

import BoldIcon from './bold.svg';

export default {
  label: 'Bold',
  name: 'bold',
  Icon: BoldIcon,
  Mark: props => <strong>{props.children}</strong>,
  serialize: (node, children) => <strong>{children}</strong>
};
