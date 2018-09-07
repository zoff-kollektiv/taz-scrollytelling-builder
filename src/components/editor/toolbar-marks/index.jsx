import React from 'react';

import MarkItem from './mark-item';

export default ({ editor, marks }) => {
  if (!editor) {
    return null;
  }

  return (
    <ul>
      {marks.map(_ => (
        <li key={_.name}>
          <MarkItem {..._} editor={editor} />
        </li>
      ))}
    </ul>
  );
};
