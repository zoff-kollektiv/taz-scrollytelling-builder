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
        {blocks.map(({ name, defaultContent = '', onClick }, key) => (
          <li key={key}>
            <button type="button" className={styles.block} onClick={event => {
              event.preventDefault();

              if (onClick) {
                onClick()
                  .then(context => {
                    this.onBlockAdd(name, { ...context, defaultContent });
                  });
              } else {
                this.onBlockAdd(name, { defaultContent });
              }
            }}>{name}</button>
          </li>
        ))}
      </ul>
    )
  }
}
