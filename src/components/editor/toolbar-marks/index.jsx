import React from 'react';

import MarkItem from './mark-item';

export default ({ marks, ...rest }) => (
  <ul>
    {marks.map(_ => (
      <li key={_.name}>
        <MarkItem {..._} {...rest} />
      </li>
    ))}
  </ul>
);
