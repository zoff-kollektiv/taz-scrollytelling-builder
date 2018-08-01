import React from 'react';

import styles from './styles';

export default {
  name: 'image',
  Component(props) {
    const { data } = props.node;

    return (
      <img src={data.get('src')} alt="" classname={styles.image} />
    )
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
