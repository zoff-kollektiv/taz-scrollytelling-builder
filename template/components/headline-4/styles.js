import css from 'styled-jsx/css';

import { fonts, mq } from '../../tokens';

export default css`
  .h4-container {
    margin-bottom: 1.25rem;
    margin-left: -0.25rem;
    margin-top: 1.5rem;
  }

  @media ${mq.tablet} {
    .h4-container {
      margin-bottom: 2rem;
      margin-left: -0.5rem;
      margin-top: 4.5rem;
    }
  }

  .h4 {
    background-color: black;
    box-decoration-break: clone;
    color: white;
    display: inline;
    font-family: ${fonts.sansSerif.family};
    font-size: 1.25rem;
    font-weight: ${fonts.sansSerif.weight.bold};
    letter-spacing: 1px;
    line-height: 1.4;
    margin-bottom: 0;
    margin-top: 0;
    padding: 0.1rem 0.25rem;
  }

  @media ${mq.tablet} {
    .h4 {
      font-size: 1.5rem;
      line-height: 1.25;
      padding: 0.15rem 0.5rem;
    }
  }
`;
