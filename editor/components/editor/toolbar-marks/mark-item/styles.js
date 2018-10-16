import css from 'styled-jsx/css';

import { fonts } from '../../../../tokens';

export default css`
  .mark-item {
    background: transparent;
    border: 0;
    color: white;
    font-family: ${fonts.inter.family};
    font-size: 0.8rem;
    font-weight: ${fonts.inter.weight.medium};
    padding: 0.45rem 1rem;
  }

  .mark-item:hover,
  .mark-item:focus {
    background-color: #151515;
    cursor: pointer;
    outline: none;
  }

  .mark-item:hover .label,
  .mark-item:focus .label {
    color: currentColor;
  }

  .mark-item--is-active {
    background-color: #151515;
  }

  .label {
    color: #b0b0b0;
  }

  :global(.mark-item svg) {
    display: inline-block;
    margin-right: 0.35rem;
    vertical-align: middle;
  }
`;
