import css from 'styled-jsx/css';

import { fonts } from '../../../tokens';

export default css`
  input {
    border: 1px solid #e1e1e1;
    border-radius: 2px;
    font-family: ${fonts.inter.family};
    font-weight: ${fonts.inter.weight.medium};
    font-size: 0.9rem;
    padding: 0.5rem;
    width: 100%;
  }

  input:focus {
    border-color: #7a7a7a;
  }

  input[readonly] {
    border-color: #efefef;
    color: #a5a5a5;
    cursor: default;
  }

  .input__label {
    font-family: ${fonts.inter.family};
    font-size: 0.95rem;
    font-weight: ${fonts.inter.weight.black};
    display: block;
  }

  .input__label + input {
    margin-top: 0.35rem;
  }

  .help {
    color: #666;
    font-family: ${fonts.inter.family};
    font-size: 0.8rem;
    font-weight: ${fonts.inter.weight.regular};
    margin-bottom: 1rem;
    margin-top: 0.35rem;
  }
`;
