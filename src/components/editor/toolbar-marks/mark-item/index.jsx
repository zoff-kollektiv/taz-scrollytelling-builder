import React from 'react';

const selectionHasMark = (state, name) =>
  state.inlines.some(_ => _.type === name);

export default ({ update, state, name, label, Icon }) => (
  <button
    disabled={selectionHasMark(state, name)}
    type="button"
    onClick={() => {
      const change = state.change().toggleMark(name);
      update(change);
    }}
  >
    <Icon style={{ height: '1rem', width: '1rem' }} />
    {label}
  </button>
);
