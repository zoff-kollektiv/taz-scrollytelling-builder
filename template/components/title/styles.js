import css from 'styled-jsx/css';

import { fonts, mq } from '../../tokens';

export default css`
  .title {
    font-family: ${fonts.sansSerif.family};
    font-size: 2rem;
    font-weigt: ${fonts.sansSerif.weight.bold};
    letter-spacing: 1px;
    line-height: 1.1;
    margin-bottom: 0;
    margin-top: 0;
    text-align: center;
  }

  @media ${mq.tablet} {
    .title {
      font-size: 4rem;
    }
  }
`;
