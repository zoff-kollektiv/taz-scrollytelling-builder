import css from 'styled-jsx/css';

import { fonts, mq } from '../../tokens';

export default css`
  .h3 {
    font-family: ${fonts.sansSerif.family};
    font-size: 1.3rem;
    font-weight: ${fonts.sansSerif.weight.bold};
    line-height: ${30 / 24};
    margin-bottom: 1.25rem;
    margin-top: 2.25rem;
  }

  @media ${mq.tablet} {
    .h3 {
      font-size: 1.5rem;
      margin-bottom: 2rem;
      margin-top: 4.5rem;
    }
  }
`;
