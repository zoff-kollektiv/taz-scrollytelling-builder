import css from 'styled-jsx/css';

import { fonts } from '../../tokens';

export default css`
  .error {
    background-color: #edaf9a;
    color: #9b0101;
    font-family: ${fonts.inter.family};
    min-height: 100vh;
    padding: 3rem 6rem;
  }

  .title {
    font-size: 1.45rem;
    font-weight: ${fonts.inter.weight.black};
    line-height: 1.2;
    margin-bottom: 0.5rem;
    margin-top: 0;
  }

  .stack {
    font-size: 0.8rem;
    font-weight: ${fonts.inter.weight.regular};
    line-height: 1.4;
  }
`;
