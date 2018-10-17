import css from 'styled-jsx/css';

import { fonts, mq } from '../../tokens';

export default css`
  .paragraph {
    font-family: ${fonts.serif.family};
    font-size: 1.125rem;
    line-height: 1.4;
  }

  @media ${mq.tablet} {
    .paragraph {
      font-size: 1.5rem;
      line-height: 1.5;
    }
  }

  :global(.paragraph a) {
    color: currentColor;
    box-decoration-break: clone;
    text-decoration: underline;
  }

  :global(.paragraph a:hover),
  :global(.paragraph a:focus) {
    background-color: black;
    color: white;
    cursor: pointer;
  }

  :global(.paragraph em) {
    background-color: black;
    box-decoration-break: clone;
    color: white;
    font-family: ${fonts.sansSerif.family};
    font-style: normal;
    font-weight: ${fonts.sansSerif.weight.bold};
    letter-spacing: 0.05rem;
    padding-left: 0.2rem;
    padding-right: 0.2rem;
  }

  @media ${mq.tablet} {
    :global(.paragraph em) {
      padding-left: 0.35rem;
      padding-right: 0.35rem;
    }
  }
`;
