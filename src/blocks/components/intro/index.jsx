import React from 'react';

import { find } from '../../../lib/ast';
import styles from './styles';

const containsIntro = ast => !!find(ast, 'type', 'intro');

export default {
  name: 'intro',
  styles,
  Component: props => (
    <header className="intro" {...props.attributes}>
      <style jsx>{styles}</style>
      {props.children}
    </header>
  ),
  disabled(ast) {
    // if there is already an intro present, do not allow to add a second one
    return containsIntro(ast);
  }
};
