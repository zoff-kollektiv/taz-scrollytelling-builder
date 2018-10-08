import React from 'react';

import styles from './styles';

export default ({ children }) => (
  <div className="form-group">
    <style jsx>{styles}</style>
    {children}
  </div>
);
