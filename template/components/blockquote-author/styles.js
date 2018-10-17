import css from 'styled-jsx/css';

import { fonts, mq } from '../../tokens';

export default css`
  .author {
    font-size: 0.9rem;
    font-family: ${fonts.sansSerif.family};
    letter-spacing: 2px;
    margin-bottom: 0;
    margin-top: 1rem;
    text-align: center;
    text-transform: uppercase;
  }

  @media ${mq.tablet} {
    .author {
      font-size: 1.125rem;
      letter-spacing: 3px;
      margin-top: 1.5rem;
    }
  }
`;
