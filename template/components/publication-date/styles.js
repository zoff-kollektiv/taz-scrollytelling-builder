import css from 'styled-jsx/css';

import { fonts } from '../../tokens';

export default css`
  .publication-date {
    border-bottom: 1px solid currentColor;
    display: inline;
    font-family: ${fonts.sansSerif.family};
    font-size: 0.875rem;
    font-weight: ${fonts.sansSerif.weight.bold};
    letter-spacing: 1px;
    margin-bottom: 1rem;
  }
`;
