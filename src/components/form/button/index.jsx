import React from 'react';

export default ({ type = 'button', children }) => (
  <button type={type}>{children}</button>
);
