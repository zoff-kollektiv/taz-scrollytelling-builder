import React from 'react';

import Icon from './heading.svg';
import layoutConstraint from '../layout-constraint';

export default {
  name: 'headline-2',
  Icon,
  defaultContent: 'Headline level 2',
  Component: props => (
    <layoutConstraint.Component attributes={{}}>
      <h2 {...props.attributes}>{props.children}</h2>
    </layoutConstraint.Component>
  )
};