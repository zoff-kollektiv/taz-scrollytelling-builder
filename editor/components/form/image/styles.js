import css from 'styled-jsx/css';

import { fonts } from '../../../tokens';

export default css`
  .select {
    background-color: black;
    border: none;
    border-radius: 3px;
    color: white;
    font-family: ${fonts.inter.family};
    font-size: 0.75rem;
    font-weight: ${fonts.inter.weight.black};
    letter-spacing: 0.05rem;
    padding: 0.75rem 1.5rem;
  }

  .file-list {
    display: flex;
    flex-direction: row;
    list-style: none;
    margin: 1rem 0;
    padding: 0;
  }

  .file-name {
    display: block;
    font-family: ${fonts.inter.family};
    font-size: 0.75rem;
    font-weight: ${fonts.inter.weight.medium};
    margin-bottom: 0.35rem;
  }

  .list-item {
    max-width: 200px;
  }

  .file-preview {
    height: auto;
    width: 100%;
  }

  .label {
    font-family: ${fonts.inter.family};
    font-size: 0.95rem;
    font-weight: ${fonts.inter.weight.black};
    display: block;
  }

  .help {
    color: #666;
    font-family: ${fonts.inter.family};
    font-size: 0.8rem;
    font-weight: ${fonts.inter.weight.regular};
    margin-bottom: 1rem;
    margin-top: 0.35rem;
  }
`;
