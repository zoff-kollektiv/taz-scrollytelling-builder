import classnames from 'classnames';
import React from 'react';

import styles from './styles';

const selectionHasMark = (state, name) =>
  state.activeMarks.some(_ => _.type === name);

export default ({ update, state, name, label, Icon }) => (
  <button
    className={classnames('mark-item', {
      'mark-item--is-active': selectionHasMark(state, name)
    })}
    type="button"
    onClick={() => {
      const change = state.change().toggleMark(name);
      update(change);
    }}
  >
    <style jsx>{styles}</style>
    <Icon style={{ height: '1rem', width: '1rem' }} />
    {label}
  </button>
);
