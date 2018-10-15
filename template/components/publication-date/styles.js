import css from 'styled-jsx/css';

import { fonts } from '../../tokens';

export default css`
  .publication-date {
    display: block;
    font-family: ${fonts.sansSerif.family};
    font-size: 0.875rem;
    font-weight: ${fonts.sansSerif.weight.bold};
    margin-bottom: 1rem;
    text-decoration: underline;
  }
`;
