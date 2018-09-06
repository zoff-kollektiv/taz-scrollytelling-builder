import React from 'react';

export default ({ marks, onClick }) => (
  <ul>
    {marks.map(({ label, name }) => (
      <li key={name}>
        <button
          type="button"
          onClick={onClick}
        >
          {label}
        </button>
      </li>
    ))}
  </ul>
);
