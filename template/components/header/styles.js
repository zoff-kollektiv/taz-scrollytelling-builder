import css from 'styled-jsx/css';

import { colors, fonts } from '../../tokens';

export default css`
  .header {
    background-color: ${colors.brand};
    color: white;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    left: 0;
    padding: 0.4rem 2rem;
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
    font-family: ${fonts.sansSerif.family};
    font-size: 0.875rem;
    font-style: normal;
    font-weight: ${fonts.sansSerif.weight.bold};
    letter-spacing: 2px;
    margin-left: 6rem;
    text-transform: uppercase;
  }

  .research-network {
    font-size: 0.825rem;
    font-weight: ${fonts.sansSerif.weight.regular};
    margin-left: 0.5rem;
  }
`;
