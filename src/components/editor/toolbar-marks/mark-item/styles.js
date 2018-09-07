import css from 'styled-jsx/css';

export default css`
  .mark-item {
    background: transparent;
    border: 0;
    padding: 0.5rem;
  }

  .mark-item:hover,
  .mark-item:focus {
    background-color: red;
    cursor: pointer;
    outline: none;
  }

  .mark-item--is-active {
    background-color: rgb(200, 200, 200);
  }
`;
