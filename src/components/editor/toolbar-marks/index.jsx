import React from 'react';

export default ({ marks, onClick }) => (
  <ul>
    {marks.map(({ label, name }) => (
      <li>
        <button
          key={name}
          type="button"
          onClick={onClick}
        >
          {label}
        </button>
      </li>
    ))}
  </ul>
);
