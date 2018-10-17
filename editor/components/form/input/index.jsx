import React from 'react';

import styles from './styles';

export default ({ label = '', type = 'text', helpText, ...rest }) => (
  <label className="input">
    <style jsx>{styles}</style>

    {type !== 'hidden' && <span className="input__label">{label}</span>}

    {type !== 'hidden' &&
      helpText && (
        <p className="help" dangerouslySetInnerHTML={{ __html: helpText }} />
      )}

    <input type={type} {...rest} />
  </label>
);
