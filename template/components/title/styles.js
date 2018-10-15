import css from 'styled-jsx/css';

import { fonts } from '../../tokens';

export default css`
  .title {
    font-family: ${fonts.sansSerif.family};
    font-size: 4rem;
    font-weigt: ${fonts.sansSerif.weight.bold};
    letter-spacing: 1px;
    line-height: 1.1;
    margin-bottom: 0;
    margin-top: 0;
    text-align: center;
  }
`;
