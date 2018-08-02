import React from 'react';

import styles from './styles';

export default {
  name: 'layout-constraint',
  private: true,
  styles,
  Component: props => (
    <div className="layout-constraint" {...props.attributes}>
      <style jsx>{styles}</style>
      {props.children}
    </div>
  )
};
