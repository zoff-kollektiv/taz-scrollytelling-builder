import css from 'styled-jsx/css';

import { colors } from '../../../tokens';

export default css`
  .header {
    background-color: ${colors.brand};
    color: white;
    left: 0;
    padding: 1rem 2rem;
    position: absolute;
    top: 3rem;
    width: 100%;
    z-index: 2;
  }
`;
