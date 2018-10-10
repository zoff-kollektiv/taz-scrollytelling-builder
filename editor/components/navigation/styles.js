import css from 'styled-jsx/css';

import { fonts } from '../../tokens';

export default css`
  .navigation {
    background-color: #444444;
    display: flex;
    justify-content: center;
  }

  :global(.navigation .item) {
    color: white;
    cursor: pointer;
    display: block;
    flex: 1 0 auto;
    font-family: ${fonts.inter.family};
    font-size: 0.9rem;
    font-weight: ${fonts.inter.weight.medium};
    padding: 0.5rem 4rem;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
  }

  :global(.navigation .item:hover),
  :global(.navigation .item:focus) {
    background-color: #151515;
  }

  :global(.navigation .item--is-active) {
    background-color: #151515;
  }
`;
