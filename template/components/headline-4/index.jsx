import React from 'react';

import { find } from '../../../editor/lib/ast';
import Icon from './heading.svg';
import layoutConstraint from '../layout-constraint';
import styles from './styles';

const containsHeadline3 = ast => !!find(ast, 'type', 'headline-3');

const Headline3 = ({ attributes = {}, children }) => (
  <layoutConstraint.Component>
    <div className="h4-container">
      <h4 className="h4" {...attributes}>
        <style jsx>{styles}</style>
        {children}
      </h4>
    </div>
  </layoutConstraint.Component>
);

export default {
  name: 'headline-4',
  label: 'Headline (Level 4)',
  Icon,
  styles,

  Component: ({ node, ...rest }) => <Headline3 data={node.data} {...rest} />,

  serialize: (node, children) => (
    <Headline3 data={node.data}>{children}</Headline3>
  ),

  disabled(ast) {
    // only enable h4, if a h3 was already used
    return !containsHeadline3(ast);
  }
};
