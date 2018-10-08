import React, { Fragment } from 'react';

import styles from './styles';

const Fonts = () => (
  <Fragment>
    <style jsx global>
      {styles}
    </style>
  </Fragment>
);

export default {
  name: 'fonts',
  private: true,
  styles,
  Component: props => <Fonts {...props} />,

  serialize: (data, children) => (
    <Fragment>
      <Fonts />
      {children}
    </Fragment>
  ),

  extract() {
    const promises = [
      'poppins.ttf',
      'poppins.woff',
      'poppins-bold.ttf',
      'poppins-bold.woff',
      'poppins-italic.ttf',
      'poppins-italic.woff',
      'poppins-bold-italic.ttf',
      'poppins-bold-italic.woff'
    ].map(name =>
      fetch(`./assets/fonts/${name}`)
        .then(res => res.blob())
        .then(file => ({
          name,
          file,
          type: 'font'
        }))
    );

    return Promise.all(promises);
  }
};
