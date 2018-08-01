import React from 'react';

import Icon from './image.svg';
import styles from './styles';

export default {
  name: 'image',
  Icon,
  styles,
  Component(props) {
    const { data } = props.node;

    return (
      <img src={data.get('src')} alt={data.get('alt')} className="image" />
    );
  },
  onClick() {
    return new Promise((resolve, reject) => {
      const src = window.prompt('Enter the URL of the image:')

      if (!src) {
        return reject(new Error('No URL was selected'));
      }

      return resolve({
        src
      });
    });
  }
};
