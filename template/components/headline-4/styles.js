import css from 'styled-jsx/css';

import { fonts } from '../../tokens';

export default css`
  .h4 {
    background-color: black;
    color: white;
    display: inline-block;
    font-family: ${fonts.sansSerif.family};
    font-size: 1.5rem;
    font-weight: ${fonts.sansSerif.weight.bold};
    letter-spacing: 1px;
    line-height: 1.25;
    margin-bottom: 2rem;
    margin-left: -0.5rem;
    margin-top: 4.5rem;
    padding: 0.15rem 0.5rem;
  }
`;
