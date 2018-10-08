import React from 'react';

import Block from './block';
import { blocks } from '../../../../../template';
import styles from './styles';

export default ({ AST, onBlockAdd }) => (
  <ul className="blocks">
    <style jsx>{styles}</style>
    {blocks
      // only allow selection of public blocks
      .filter(_ => _.private !== true)
      // only show not enabled blocks
      .filter(_ => !_.disabled || !(_.disabled && _.disabled(AST)))
      .map(_ => (
        <li key={_.name}>
          <Block {..._} onBlockAdd={onBlockAdd} />
        </li>
      ))}
  </ul>
);
