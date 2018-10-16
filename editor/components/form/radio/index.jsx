import React from 'react';

import styles from './styles';

export default ({ name, label = '', choices = [], ...rest }) => (
  <div className="radio-group">
    <style jsx>{styles}</style>

    <span className="radio-group__label">{label}</span>

    <div className="choices">
      {choices.map(([inputValue, inputLabel], index) => (
        <label className="input" key={`${name}-${inputValue}`}>
          <input
            type="radio"
            name={name}
            value={inputValue}
            defaultChecked={index === 0}
            {...rest}
          />

          <span className="input__label">{inputLabel}</span>
        </label>
      ))}
    </div>
  </div>
);
