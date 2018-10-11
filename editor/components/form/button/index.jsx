import React, { Fragment } from 'react';

import styles from './styles';

export default ({ type = 'button', children }) => (
  <Fragment>
    {/* eslint-disable-next-line react/button-has-type */}
    <button type={type}>
      <style jsx>{styles}</style>
      {children}
    </button>
  </Fragment>
);
