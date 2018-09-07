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
  }
};
