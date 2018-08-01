import css from 'styled-jsx/css';

export default css`
  .toolbar {
    position: relative;
  }

  .toolbar__blocks {
    bottom: 5rem;
    position: absolute;
    right: 0;
  }

  .toolbar__toggle {
    background-color: red;
    border: 0;
    border-radius: 50%;
    color: white;
    font-weight: bold;
    padding: 2rem .5rem;
  }

  .toolbar__toggle:hover,
  .toolbar__toggle:focus {
    cursor: pointer;
  }

  .toolbar__save {
    background-color: green;
    border: 0;
    border-radius: 50%;
    color: white;
    font-weight: bold;
    margin-right: 1rem;
    padding: 1rem .35rem;
  }

  .toolbar__save:hover,
  .toolbar__save:focus {
    cursor: pointer;
  }
`;
