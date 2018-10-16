import React from 'react';

import MarkItem from './mark-item';
import styles from './styles';

export default ({ marks, position, ...rest }) => (
  <ul className="toolbar-marks" style={position}>
    <style jsx>{styles}</style>
    {marks.map(_ => (
      <li className="item" key={_.name}>
        <MarkItem {..._} {...rest} />
      </li>
    ))}
  </ul>
);
