import css from 'styled-jsx/css';

import { fonts } from '../../../tokens';

export default css`
  .radio-group__label {
    font-family: ${fonts.inter.family};
    font-size: 0.8rem;
    font-weight: ${fonts.inter.weight.black};
    display: block;
    margin-bottom: 0.35rem;
  }

  .choices {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
  }

  .input {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
  }

  .input + .input {
    margin-left: 1.5rem;
  }

  .input__label {
    font-family: ${fonts.inter.family};
    font-size: 0.9rem;
    font-weight: ${fonts.inter.weight.medium};
    display: block;
    margin-left: 0.15rem;
  }
`;
