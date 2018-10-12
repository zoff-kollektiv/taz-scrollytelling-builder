import React from 'react';

import styles from './styles';

export default ({ label, ...rest }) => (
  <label className="textarea">
    <style jsx>{styles}</style>
    <span className="textarea__label">{label}</span>
    <textarea {...rest} />
  </label>
);
