import css from 'styled-jsx/css';

import { fonts } from '../../tokens';

export default css`
  .standfirst {
    font-family: ${fonts.sansSerif.family};
    font-size: 1.125rem;
    font-weight: ${fonts.sansSerif.weight.regular};
    margin-bottom: 0;
    margin-top: 0.75rem;
    text-align: center;
  }
`;
