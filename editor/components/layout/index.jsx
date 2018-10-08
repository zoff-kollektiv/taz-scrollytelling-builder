import React, { Fragment } from 'react';

import styles from './styles';

export default ({ children }) => (
  <Fragment>
    <style jsx global>
      {styles}
    </style>

    {children}
  </Fragment>
);
