import css from 'styled-jsx/css';

import { fonts, mq } from '../../tokens';

export default css`
  .title {
    display: block;
    font-family: ${fonts.sansSerif.family};
    font-size: 2rem;
    font-weigt: ${fonts.sansSerif.weight.bold};
    hyphens: auto;
    letter-spacing: 1px;
    line-height: 1.1;
    margin-bottom: 0;
    margin-top: 0;
    overflow-wrap: break-word;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    text-align: center;
    word-wrap: break-word;
  }

  @media ${mq.tablet} {
    .title {
      font-size: 4rem;
      hyphens: none;
    }
  }
`;
