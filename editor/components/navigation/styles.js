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
    font-size: 0.7rem;
    font-weight: ${fonts.inter.weight.black};
    letter-spacing: 0.05rem;
    padding: 0.4rem 4rem;
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

  :global(.navigation .item + .item) {
    border-left: 1px solid #6b6b6b;
  }
`;
