import css from 'styled-jsx/css';

import { fonts } from '../../../tokens';

export default css`
  .block {
    position: relative;
    transition: padding 50ms ease;
  }

  .block--is-focused {
    background-color: rgba(213, 213, 213, 0.2);
    padding-bottom: 0.5rem;
    padding-top: 0.5rem;
  }
`;
