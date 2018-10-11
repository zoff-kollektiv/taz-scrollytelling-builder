import css from 'styled-jsx/css';

import { fonts } from '../../../tokens';

export default css`
  button {
    background-color: black;
    border: none;
    border-radius: 3px;
    color: white;
    font-family: ${fonts.inter.family};
    font-size: 0.8rem;
    font-weight: ${fonts.inter.weight.black};
    letter-spacing: 0.05rem;
    padding: 0.75rem 2.5rem;
    text-transform: uppercase;
  }
`;
