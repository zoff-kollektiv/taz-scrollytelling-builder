import css from 'styled-jsx/css';

import { fonts } from '../../tokens';

export default css`
  .h2 {
    font-family: ${fonts.sansSerif.family};
    font-size: 1.875rem;
    font-weight: ${fonts.sansSerif.weight.bold};
    line-height: ${36 / 30};
    margin-bottom: 2.875rem;
    margin-top: 3.175rem;
  }
`;
