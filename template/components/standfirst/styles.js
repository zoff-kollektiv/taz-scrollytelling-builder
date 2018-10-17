import css from 'styled-jsx/css';

import { fonts, mq } from '../../tokens';

export default css`
  .standfirst {
    font-family: ${fonts.sansSerif.family};
    font-size: 1rem;
    font-weight: ${fonts.sansSerif.weight.regular};
    letter-spacing: 1px;
    line-height: 1.35;
    margin-bottom: 0;
    margin-top: 0.75rem;
    text-align: center;
  }

  @media ${mq.tablet} {
    .standfirst {
      font-size: 1.125rem;
    }
  }
`;
