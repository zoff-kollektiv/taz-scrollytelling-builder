import React, { Fragment } from 'react';

import styles from './styles';

export default ({ type = 'button', children, ...rest }) => (
  <Fragment>
    {/* eslint-disable-next-line react/button-has-type */}
    <button type={type} {...rest}>
      <style jsx>{styles}</style>
      {children}
    </button>
  </Fragment>
);
