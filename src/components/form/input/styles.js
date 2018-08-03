import css from 'styled-jsx/css';

export default css`
  input {
    font-size: 1rem;
    padding: 0.2rem;
    width: 100%;
  }

  .input__label {
    font-weight: bold;
    display: block;
  }

  .input__label + input {
    margin-top: 0.3rem;
  }
`;
