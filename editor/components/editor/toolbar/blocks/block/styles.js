import css from 'styled-jsx/css';

import { fonts } from '../../../../../tokens';

export default css`
  .block {
    background-color: #444444;
    border: 0;
    color: white;
    font-family: ${fonts.inter.family};
    font-size: 0.9rem;
    font-weight: ${fonts.inter.weight.bold};
    margin-bottom: 0.05rem;
    padding: 0.75rem 1.5rem 0.75rem 2.5rem;
    text-align: right;
    white-space: nowrap;
    width: 100%;
  }

  .block:hover,
  .block:focus {
    background-color: #151515;
    cursor: pointer;
    outline: none;
  }

  .block__label {
    color: white;
    margin-right: 0.75rem;
    vertical-align: middle;
  }
`;
