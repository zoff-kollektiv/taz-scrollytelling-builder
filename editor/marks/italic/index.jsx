import React from 'react';

import ItalicIcon from './italic.svg';

export default {
  label: 'Italic',
  name: 'italic',
  Icon: ItalicIcon,
  Mark: props => <i>{props.children}</i>,
  serialize: (mark, children) => <i>{children}</i>
};
