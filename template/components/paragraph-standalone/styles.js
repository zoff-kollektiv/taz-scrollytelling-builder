import css from 'styled-jsx/css';

import { fonts } from '../../tokens';

export default css`
  .paragraph {
    font-family: ${fonts.serif.family};
    font-size: 1.5rem;
    line-height: ${36 / 24};
  }

  :global(.paragraph a) {
    color: currentColor;
    text-decoration: underline;
  }
`;
