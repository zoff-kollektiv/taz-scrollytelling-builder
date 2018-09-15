import React, { Fragment } from 'react';

import styles from './styles';

export default {
  name: 'layout',
  private: true,
  styles,
  Component: props => (
    <Fragment>
      <style jsx global>
        {styles}
      </style>
      {props.children}
    </Fragment>
  ),

  serialize(data, children) {
    return (
      <html lang="de">
        <head>
          <meta charSet="utf-8" />
          <title>My Title</title>
          <style type="text/css">[styles]</style>
        </head>

        <body>
          <div className="app">{children}</div>
        </body>
      </html>
    );
  },

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
      fetch(`./fonts/${name}`)
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
