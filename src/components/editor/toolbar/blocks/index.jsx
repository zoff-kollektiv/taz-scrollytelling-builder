import React, { Component } from 'react';

import Block from './block';
import { blocks } from '../../../../blocks';
import styles from './styles';

export default class extends Component {
  onBlockAdd = (type, context) => {
    this.props.onBlockAdd(type, context);
  };

  render() {
    const { AST } = this.props;

    return (
      <ul className="blocks">
        <style jsx>{styles}</style>
        {blocks
          // only allow selection of public blocks
          .filter(_ => _.private !== true)
          // only show not enabled blocks
          .filter(_ => !_.disabled || !(_.disabled && _.disabled(AST)))
          .map(_ => (
            <li key={_.name}>
              <Block {..._} onBlockAdd={this.onBlockAdd} />
            </li>
          ))}
      </ul>
    );
  }
}
