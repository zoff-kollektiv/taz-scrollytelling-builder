import css from 'styled-jsx/css';

import { fonts, mq } from '../../tokens';

export default css`
  .authors {
    font-family: ${fonts.sansSerif.family};
    font-size: 0.95rem;
    font-style: italic;
    letter-spacing: 0.06rem;
    line-height: 1.2;
    margin-top: 1.5rem;
    text-align: center;
  }

  @media ${mq.tablet} {
    .authors {
      font-size: 1.125rem;
      letter-spacing: 1px;
      margin-top: 3rem;
    }
  }

  :global(.authors a) {
    color: currentColor;
    text-decoration: underline;
  }
`;
