import css from 'styled-jsx/css';

import { fonts } from '../../../tokens';

export default css`
  .block {
    position: relative;
    transition: padding 50ms ease;
  }

  .block--is-focused {
    background-color: rgba(213, 213, 213, 0.2);
    padding-bottom: 0.5rem;
    padding-top: 0.5rem;
  }

  .toolbar {
    background-color: rgba(213, 213, 213, 0.2);
    color: black;
    display: none;
    flex-direction: row;
    font-family: ${fonts.inter.family};
    font-size: 0.8rem;
    font-weight: ${fonts.inter.weight.black};
    justify-content: flex-end;
    left: 0;
    padding: 0.15rem 1.5rem;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 100;
  }

  .toolbar--is-visible {
    display: flex;
  }

  .button {
    background: transparent;
    border: none;
    color: black;
    cursor: pointer;
    font-family: ${fonts.inter.family};
    font-size: 0.8rem;
    font-weight: ${fonts.inter.weight.medium};
    margin-left: 0.5rem;
    padding: 0;
  }

  .button:hover,
  .button:focus {
    text-decoration: underline;
  }
`;
