import React from 'react';

import styles from './styles';

export default {
  name: 'layout-constraint',
  private: true,
  styles,
  Component: ({ children }) => (
    <div className="layout-constraint">
      <style jsx>{styles}</style>
      {children}
    </div>
  ),

  serialize(data, children) {
    return (
      <div className="layout-constraint">
        <style jsx>{styles}</style>
        {children}
      </div>
    );
  }
};
