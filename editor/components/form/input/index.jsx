import React from 'react';

import styles from './styles';

export default ({ label = '', type = 'text', ...rest }) => (
  <label className="input">
    <style jsx>{styles}</style>
    <span className="input__label">{label}</span>
    <input type={type} {...rest} />
  </label>
);
