import React from 'react';

import Icon from './heading.svg';
import layoutConstraint from '../layout-constraint';
import styles from './styles';

const Headline2 = ({ attributes = {}, children }) => (
  <layoutConstraint.Component>
    <style jsx>{styles}</style>
    <h2 className="h2" {...attributes}>
      {children}
    </h2>
  </layoutConstraint.Component>
);

export default {
  name: 'headline-2',
  Icon,
  styles,
  Component: ({ node, ...rest }) => <Headline2 data={node.data} {...rest} />,

  serialize: (node, children) => (
    <Headline2 data={node.data}>{children}</Headline2>
  )
};
