import css from 'styled-jsx/css';

import { fonts } from '../../tokens';

export default css`
  .h3 {
    font-family: ${fonts.sansSerif.family};
    font-size: 1.5rem;
    font-weight: ${fonts.sansSerif.weight.bold};
    line-height: ${30 / 24};
    margin-bottom: 2rem;
    margin-top: 4.5rem;
  }
`;
