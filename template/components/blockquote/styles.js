import css from 'styled-jsx/css';

import { fonts, mq } from '../../tokens';

export default css`
  .blockquote {
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: 1.5rem 0 3rem;
    padding-top: 1rem;
    position: relative;
  }

  .icon-container {
    text-align: center;
  }

  /* Blockquote text */
  :global(.blockquote .paragraph:not(.author)) {
    font-family: ${fonts.sansSerif.family};
    font-size: 1.5rem;
    font-weight: ${fonts.sansSerif.weight.bold};
    font-weight: bold;
    letter-spacing: 0.05rem;
    line-height: 1.25;
    text-align: center;
  }

  @media ${mq.tablet} {
    :global(.blockquote .paragraph:not(.author)) {
      font-size: 2.25rem;
    }
  }
`;
