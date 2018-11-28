import css from 'styled-jsx/css';

import { colors, fonts } from '../../tokens';

export default css`
  .tweet-container {
    margin: 3rem 0;
  }

  .tweet-inner-container {
    line-height: 0;
  }

  :global(.twitter-tweet) {
    margin-bottom: 0;
    margin-top: 0;
  }

  /* target the non-enhanced widget */
  :global(.twitter-tweet:not(.twitter-tweet-rendered)) {
    color: rgb(85, 182, 198);
    font-family: ${fonts.sansSerif.family};
    font-size: 1rem;
    line-height: 1.4;
    margin: 0;
  }

  :global(.twitter-tweet:not(.twitter-tweet-rendered) a) {
    color: currentColor;
    text-decoration: underline;
  }

  :global(.twitter-tweet:not(.twitter-tweet-rendered) > p) {
    color: ${colors.brand};
    font-size: 1.125rem;
    margin-bottom: 1.5rem;
    margin-top: 0;
  }
`;
