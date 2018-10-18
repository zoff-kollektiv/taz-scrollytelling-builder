import css from 'styled-jsx/css';

import { fonts, mq } from '../../tokens';

export default css`
  .caption {
    color: rgb(159, 159, 159);
    font-family: ${fonts.sansSerif.family};
    font-size: 0.687rem;
    letter-spacing: 0.05rem;
    line-height: 1.5;
    margin-top: 0.5rem;
    text-align: left;
  }

  @media ${mq.tablet} {
    .caption {
      font-size: 0.875rem;
      margin-top: 1.25rem;
    }
  }

  .caption:empty {
    display: none;
  }
`;
