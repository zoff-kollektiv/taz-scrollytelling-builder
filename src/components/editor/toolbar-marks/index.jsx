import React, { Component } from 'react';

import MarkItem from './mark-item';
import styles from './styles';

export default class ToolbarMark extends Component {
  render() {
    const { marks, position, ...rest } = this.props;

    return (
      <ul className="toolbar-marks" style={position}>
        <style jsx>{styles}</style>
        {marks.map(_ => (
          <li key={_.name}>
            <MarkItem {..._} {...rest} />
          </li>
        ))}
      </ul>
    );
  }
}
