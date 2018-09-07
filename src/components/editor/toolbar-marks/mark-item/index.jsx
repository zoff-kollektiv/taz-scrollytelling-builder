import React from 'react';

const selectionHasMark = (editor, name) => {
  const { value } = editor;
  return value.inlines.some(_ => _.type === name);
};

export default ({ editor, name, label }) => (
  <button
    disabled={selectionHasMark(editor, name)}
    type="button"
    onClick={() => {
      const { value } = editor;
      const change = value.change().toggleMark(name);
      editor.onChange(change);
    }}
  >
    {label}
  </button>
);
