import css from 'styled-jsx/css';

import { fonts } from '../../tokens';

export default css`
  .figure {
    font-size: 0;
    line-height: 1;
    margin: 5rem auto;
    text-align: center;
  }

  .figure--is-full {
    margin: 7rem 0;
  }

  .figure--is-wide {
    max-width: 900px;
  }

  .figure--is-constraint {
    max-width: 780px;
  }

  .image {
    height: auto;
    width: 100%;
  }

  .caption {
    color: #4a4a4a;
    font-family: ${fonts.sansSerif.family};
    font-size: 0.875rem;
    line-height: 1.5;
    margin-top: 1rem;
    text-align: left;
  }
`;
