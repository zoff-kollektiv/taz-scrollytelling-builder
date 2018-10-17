import css from 'styled-jsx/css';

import { colors, fonts } from '../../tokens';

export default css`
  .header {
    align-items: center;
    background-color: ${colors.brand};
    color: white;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    height: 40px;
    left: 0;
    padding: 0.4rem 2rem;
    position: absolute;
    top: 3rem;
    width: 100%;
    z-index: 2;
  }

  .logo-publisher {
    margin-right: 1rem;
    width: 5rem;
  }

  .header--publisher-internazionale .logo-publisher {
    width: 10rem;
  }

  .header--publisher-taz .logo-publisher {
    width: 4rem;
  }

  .header--publisher-hvg .logo-publisher {
    width: 3rem;
  }

  :global(.header--publisher-falter .logo-publisher > svg) {
    margin-top: 0.25rem;
    max-height: 1.2rem;
  }

  :global(.header--publisher-taz .logo-publisher > svg) {
    margin-top: 0.1rem;
    max-height: 1.35rem;
  }

  :global(.header:not(.header--publisher-hvg) .logo-publisher path) {
    fill: currentColor;
  }

  // Project logo
  :global(.header .logo-container svg) {
    height: 3.5rem;
    margin-top: 0.3rem;
    width: 3.5rem;
  }

  :global(.header .logo-publisher > svg) {
    height: auto;
    max-height: 1.7rem;
    margin-right: 2rem;
    margin-top: 0.15rem;
    width: 100%;
  }

  .title {
    font-family: ${fonts.sansSerif.family};
    font-size: 0.875rem;
    font-style: normal;
    font-weight: ${fonts.sansSerif.weight.bold};
    letter-spacing: 2px;
    margin-left: 1rem;
    text-transform: uppercase;
  }

  .research-network {
    font-size: 0.825rem;
    font-weight: ${fonts.sansSerif.weight.regular};
    margin-left: 0.5rem;
  }
`;
