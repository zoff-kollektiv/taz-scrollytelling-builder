import css from 'styled-jsx/css';

import { fonts } from '../../tokens';

export default css`
  .metadata {
    background-color: #efefef;
    display: flex;
    justify-content: center;
    padding-bottom: 4rem;
    padding-top: 2rem;
  }

  .constraint {
    width: 800px;
  }

  .title {
    font-family: ${fonts.inter.family};
    font-weight: ${fonts.inter.weight.black};
    margin-bottom: 2rem;
    margin-left: 1.25rem;
    margin-top: 0;
  }

  .section {
    background-color: white;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
    padding: 2rem 1.25rem;
  }

  .section + .section {
    margin-top: 2.5rem;
  }

  .section-title {
    font-family: ${fonts.inter.family};
    font-size: 1.15rem;
    font-weight: ${fonts.inter.weight.black};
    margin-bottom: 1.5rem;
    margin-top: 0;
  }

  .section-block + .section-block {
    margin-top: 1.5rem;
  }

  label {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
  }

  .label-text {
    display: inline-block;
    font-family: ${fonts.inter.family};
    font-size: 0.95rem;
    font-weight: ${fonts.inter.weight.medium};
    position: relative;
    top: 0.25rem;
    width: 6rem;
  }

  input,
  textarea {
    border: 1px solid #e4e4e4;
    font-family: ${fonts.inter.family};
    font-size: 0.8rem;
    font-weight: ${fonts.inter.weight.regular};
    margin-left: 2rem;
    padding: 0.5rem;
    width: 100%;
  }

  input:focus,
  textarea:focus {
    border-color: #999;
    box-shadow: 0 0 2px rgba(182, 182, 182, 0.8);
  }

  textarea {
    height: 6rem;
  }
`;
