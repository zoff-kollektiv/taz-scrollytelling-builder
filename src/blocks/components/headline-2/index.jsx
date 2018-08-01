import React from 'react';

import Icon from './heading.svg';

export default {
  name: 'headline-2',
  Icon,
  defaultContent: 'Headline level 2',
  Component: (props) => (
    <h2 {...props.attributes}>
      {props.children}
    </h2>
  )
};
