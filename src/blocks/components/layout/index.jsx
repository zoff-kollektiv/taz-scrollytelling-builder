import React, { Fragment } from 'react';

import styles from './styles';

export default {
  name: 'layout',
  private: true,
  styles,
  Component: props => (
    <Fragment>
      <style jsx global>{styles}</style>
      {props.children}
    </Fragment>
  )
};
