import css from 'styled-jsx/css';

import { fonts } from '../../tokens';

export default css`
  .authors {
    font-family: ${fonts.sansSerif.family};
    font-size: 1.125rem;
    font-style: italic;
    letter-spacing: 1px;
    line-height: ${22 / 18};
    margin-top: 2rem;
    text-align: center;
  }
`;
