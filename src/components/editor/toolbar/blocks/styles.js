import css from 'styled-jsx/css';

export default css`
  .blocks {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .blocks__block {
    background-color: #dcdcdc;
    border: 0;
    color: #333;
    font-size: 0.9rem;
    font-weight: bold;
    margin-bottom: 0.2rem;
    padding: 0.65rem 1.5rem 0.65rem 2.5rem;
    text-align: right;
    width: 100%;
  }

  .blocks__block:hover,
  .blocks__block:focus {
    background-color: #c5c5c5;
    cursor: pointer;
    outline: none;
  }

  .blocks__block-label {
    color: #737373;
    margin-right: 0.5rem;
    vertical-align: middle;
  }
`;
