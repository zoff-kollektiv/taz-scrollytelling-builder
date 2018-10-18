import css from 'styled-jsx/css';

import { colors, fonts, mq } from '../../tokens';

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
    padding: 0.4rem 0.5rem 0.4rem 1rem;
    position: absolute;
    top: 1.5rem;
    width: 100%;
    z-index: 2;
  }

  @media ${mq.tablet} {
    .header {
      padding-left: 2rem;
      top: 3rem;
    }
  }

  .logo-publisher {
    margin-right: 1rem;
    width: 4rem;
  }

  @media ${mq.tablet} {
    .logo-publisher {
      width: 5rem;
    }
  }

  @media ${mq.tablet} {
    .header--publisher-internazionale .logo-publisher {
      width: 10rem;
    }
  }

  .header--publisher-taz .logo-publisher {
    width: 4rem;
  }

  .header--publisher-hvg .logo-publisher {
    width: 2rem;
  }

  @media ${mq.tablet} {
    .header--publisher-hvg .logo-publisher {
      width: 3rem;
    }
  }

  :global(.header .logo-publisher > svg) {
    height: auto;
    max-height: 1.5rem;
    width: 100%;
  }

  @media ${mq.tablet} {
    :global(.header .logo-publisher > svg) {
      max-height: 1.7rem;
    }
  }

  :global(.header--publisher-falter .logo-publisher > svg) {
    margin-top: 0.25rem;
    max-height: 1.2rem;
  }

  :global(.header--publisher-taz .logo-publisher > svg) {
    max-height: 1.15rem;
  }

  @media ${mq.tablet} {
    :global(.header--publisher-taz .logo-publisher > svg) {
      max-height: 1.35rem;
    }
  }

  :global(.header:not(.header--publisher-hvg, .header--publisher-liberation)
      .logo-publisher
      path) {
    fill: currentColor;
  }

  :global(.header--publisher-liberation
      .logo-publisher
      #liberation-background) {
    fill: rgb(48, 48, 48);
  }

  // Project logo
  :global(.header .logo-container svg) {
    height: 3rem;
    margin-top: 0.3rem;
    width: 3rem;
  }

  @media ${mq.tablet} {
    :global(.header .logo-container svg) {
      height: 3.5rem;
      margin-top: 0.3rem;
      width: 3.5rem;
    }
  }

  .title {
    font-family: ${fonts.sansSerif.family};
    font-size: 0.675rem;
    font-style: normal;
    font-weight: ${fonts.sansSerif.weight.bold};
    letter-spacing: 2px;
    margin-left: 1rem;
    text-transform: uppercase;
  }

  @media ${mq.tablet} {
    .title {
      font-size: 0.875rem;
    }
  }

  .research-network {
    display: block;
    font-size: 0.6rem;
    font-weight: ${fonts.sansSerif.weight.regular};
    line-height: 1.2;
  }

  @media ${mq.tablet} {
    .research-network {
      display: inline-block;
      font-size: 0.825rem;
      margin-left: 0.25rem;
    }
  }
`;
