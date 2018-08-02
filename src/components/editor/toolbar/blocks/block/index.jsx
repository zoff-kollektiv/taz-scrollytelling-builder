import React, { Component } from 'react';

import styles from './styles';

export default class Block extends Component {
  onBlockAdd = (type, context) => {
    this.props.onBlockAdd(type, context);
  };

  render() {
    const { name, defaultContent = '', onClick, Icon } = this.props;

    return (
      <button
        type="button"
        className="block"
        onClick={event => {
          event.preventDefault();

          if (onClick) {
            onClick().then(context => {
              this.onBlockAdd(name, { ...context, defaultContent });
            });
          } else {
            this.onBlockAdd(name, { defaultContent });
          }
        }}
      >
        <style jsx>{styles}</style>
        <span className="block__label">{name}</span>
        {Icon && (
          <Icon
            style={{
              height: '1rem',
              verticalAlign: 'middle',
              width: '1rem'
            }}
          />
        )}
      </button>
    );
  }
}
