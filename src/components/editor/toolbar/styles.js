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
    background-color: #444444;
    border: 0;
    border-radius: 50%;
    color: white;
    font-weight: bold;
    padding: 1.5rem;
    transition: transform 30ms ease-in;
  }

  .toolbar__toggle:hover,
  .toolbar__toggle:focus {
    background-color: #151515;
    cursor: pointer;
    outline: none;
  }

  .toolbar__toggle--is-open {
    transform: rotate(45deg);
  }

  .toolbar__save {
    background-color: #444444;
    border: 0;
    border-radius: 50%;
    color: white;
    font-weight: bold;
    margin-right: 1rem;
    padding: 1rem;
  }

  .toolbar__save:hover,
  .toolbar__save:focus {
    background-color: #151515;
    cursor: pointer;
    outline: none;
  }
`;
