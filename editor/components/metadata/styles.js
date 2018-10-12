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
    background-color: white;
    padding: 1.5rem;
    width: 800px;
  }

  .title {
    font-family: ${fonts.inter.family};
    font-weight: ${fonts.inter.weight.black};
    margin-bottom: 2rem;
    margin-top: 0;
  }
`;
