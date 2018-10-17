import React from 'react';

import styles from './styles';

export default ({ label, helpText, ...rest }) => (
  <label className="textarea">
    <style jsx>{styles}</style>
    <span className="textarea__label">{label}</span>

    {helpText && (
      <p className="help" dangerouslySetInnerHTML={{ __html: helpText }} />
    )}

    <textarea {...rest} />
  </label>
);
