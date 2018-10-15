import React from 'react';

import HighlightIcon from './highlighter.svg';

export default {
  label: 'Highlight',
  name: 'highlight',
  Icon: HighlightIcon,
  Mark: ({ attributes = {}, children }) => <em {...attributes}>{children}</em>,
  serialize: (node, children) => <em>{children}</em>
};
