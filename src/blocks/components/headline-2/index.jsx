import React from 'react';

export default {
  name: 'headline-2',
  defaultContent: 'Headline level 2',
  Component: (props) => (
    <h2 {...props.attributes}>
      {props.children}
    </h2>
  )
};
