import React from 'react';

import { find } from '../../../editor/lib/ast';
import styles from './styles';

const containsHeader = ast => !!find(ast, 'type', 'header');

export default {
  name: 'header',
  styles,
  Component: props => (
    <header className="header" {...props.attributes}>
      <style jsx>{styles}</style>
      <strong>taz.de</strong>
      {props.children}
    </header>
  ),
  disabled(ast) {
    // if there is already a header present, do not allow to add a second one
    return containsHeader(ast);
  }
};
