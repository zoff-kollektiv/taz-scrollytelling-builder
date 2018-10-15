import React from 'react';

import { find } from '../../../editor/lib/ast';
import Icon from './heading.svg';
import layoutConstraint from '../layout-constraint';
import styles from './styles';

const containsHeadline2 = ast => !!find(ast, 'type', 'headline-2');

const Headline3 = ({ attributes = {}, children }) => (
  <layoutConstraint.Component>
    <h3 className="h3" {...attributes}>
      <style jsx>{styles}</style>
      {children}
    </h3>
  </layoutConstraint.Component>
);

export default {
  name: 'headline-3',
  label: 'Headline (Level 3)',
  Icon,
  styles,

  Component: ({ node, ...rest }) => <Headline3 data={node.data} {...rest} />,

  serialize: (node, children) => (
    <Headline3 data={node.data}>{children}</Headline3>
  ),

  disabled(ast) {
    // only enable h3, if a h2 was already used
    return !containsHeadline2(ast);
  }
};
