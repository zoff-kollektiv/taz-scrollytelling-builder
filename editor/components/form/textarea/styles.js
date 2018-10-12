import css from 'styled-jsx/css';

import { fonts } from '../../../tokens';

export default css`
  textarea {
    border: 1px solid #e1e1e1;
    border-radius: 2px;
    font-family: ${fonts.inter.family};
    font-weight: ${fonts.inter.weight.medium};
    font-size: 0.9rem;
    height: 8rem;
    padding: 0.5rem;
    width: 100%;
  }

  textarea:focus {
    border-color: #7a7a7a;
  }

  textarea[readonly] {
    border-color: #efefef;
    color: #a5a5a5;
    cursor: default;
  }

  .textarea__label {
    font-family: ${fonts.inter.family};
    font-size: 0.8rem;
    font-weight: ${fonts.inter.weight.black};
    display: block;
  }

  .textarea__label + textarea {
    margin-top: 0.35rem;
  }
`;
