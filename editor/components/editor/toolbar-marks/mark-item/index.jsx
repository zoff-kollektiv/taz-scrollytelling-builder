import classnames from 'classnames';
import React from 'react';

import { findMarkByName } from '../../../../marks';
import styles from './styles';

const selectionHasMark = (state, name) =>
  [...state.activeMarks, ...state.inlines].some(_ => _.type === name);

export default ({ editor, state, name, label, Icon }) => (
  <button
    className={classnames('mark-item', {
      'mark-item--is-active': selectionHasMark(state, name)
    })}
    type="button"
    onClick={() => {
      const mark = findMarkByName(name);

      editor.change(change => {
        if (mark && mark.onSelect) {
          mark.onSelect(state, change);
        } else {
          change.toggleMark(name);
        }
      });
    }}
  >
    <style jsx>{styles}</style>
    <Icon style={{ height: '1rem', width: '1rem' }} />
    <span className="label">{label}</span>
  </button>
);
