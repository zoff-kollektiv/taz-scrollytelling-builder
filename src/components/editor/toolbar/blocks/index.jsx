import React, { Component } from 'react';

import { blocks } from '../../../../blocks';
import styles from './styles';

export default class Block extends Component {
  onBlockAdd = (type, context) => {
    this.props.onBlockAdd(type, context);
  }

  render() {
    return (
      <ul className={styles.blocks}>
        {blocks.map(({ name, defaultContent = '' }, key) => (
          <li key={key}>
            <button type="button" className={styles.block} onClick={event => {
              event.preventDefault();
              this.onBlockAdd(name, { defaultContent });
            }}>{name}</button>
          </li>
        ))}
      </ul>
    )
  }
}
