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
    margin-bottom: 0;
    margin-top: 0;
  }

  .intro {
    color: #666;
    font-family: ${fonts.inter.family};
    font-size: 1rem;
    font-weight: ${fonts.inter.weight.medium};
    margin-bottom: 4rem;
    margin-top: 0.5rem;
  }

  .section-title {
    border-top: 5px solid black;
    font-family: ${fonts.inter.family};
    font-size: 2rem;
    font-weight: ${fonts.inter.weight.black};
    margin-bottom: 0.75rem;
    margin-top: 4rem;
    padding-top: 2.75rem;
  }
`;
