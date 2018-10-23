import css from 'styled-jsx/css';

import { fonts, mq } from '../../tokens';

export default css`
  .h2 {
    font-family: ${fonts.sansSerif.family};
    font-size: 1.5rem;
    font-weight: ${fonts.sansSerif.weight.bold};
    hyphens: auto;
    letter-spacing: 1px;
    line-height: ${36 / 30};
    margin-bottom: 1.25rem;
    margin-top: 2.5rem;
    overflow-wrap: break-word;
    word-wrap: break-word;
  }

  @media ${mq.tablet} {
    .h2 {
      font-size: 1.875rem;
      margin-bottom: 1.5rem;
      margin-top: 3.175rem;
    }
  }
`;
