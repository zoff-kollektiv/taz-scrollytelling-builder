import css from 'styled-jsx/css';

import { fonts } from '../../tokens';

export default css`
  .tweet-container {
    margin: 3rem 0;
  }

  /* target the not rendered widget */

  :global(.twitter-tweet:not(.twitter-tweet-rendered)) {
    font-family: ${fonts.serif.family};
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 1.4;
    margin: 0;
  }

  :global(.twitter-tweet:not(.twitter-tweet-rendered) a) {
    color: currentColor;
    text-decoration: underline;
  }

  :global(.twitter-tweet:not(.twitter-tweet-rendered) > p) {
    font-weight: ${fonts.serif.weight.regular};
  }
`;
