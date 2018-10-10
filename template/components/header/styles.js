import css from 'styled-jsx/css';

import { colors } from '../../tokens';

export default css`
  .header {
    background-color: ${colors.brand};
    color: white;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    left: 0;
    padding: 1rem 2rem;
    position: absolute;
    top: 3rem;
    width: 100%;
    z-index: 2;
  }

  .logo-container {
    left: 5rem;
    position: absolute;
    top: -0.75rem;
  }

  .title {
    font-style: normal;
    margin-left: 6rem;
    text-transform: uppercase;
  }
`;
