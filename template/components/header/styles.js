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
    padding: 0.5rem 2rem;
    position: absolute;
    top: 3rem;
    width: 100%;
    z-index: 2;
  }

  .logo-container {
    left: 6rem;
    position: absolute;
    top: -0.75rem;
  }

  :global(.header .logo-container svg) {
    height: 3.5rem;
    width: 3.5rem;
  }

  .title {
    font-style: normal;
    margin-left: 6rem;
    text-transform: uppercase;
  }
`;
