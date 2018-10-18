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
    padding: 0.4rem 0.5rem 0.4rem 0.4rem;
    position: absolute;
    top: 1.5rem;
    width: 100%;
    z-index: 2;
  }

  @media ${mq.phone} {
    .header {
      padding-left: 1rem;
    }
  }

  @media ${mq.tablet} {
    .header {
      padding-left: 2rem;
      top: 2.5rem;
    }
  }

  .logo-publisher {
    width: 4rem;
  }

  @media ${mq.phone} {
    .logo-publisher {
      margin-right: 1rem;
    }
  }

  @media ${mq.tablet} {
    .logo-publisher {
      margin-top: 0.1rem;
      width: 5rem;
    }
  }

  @media ${mq.tablet} {
    .header--publisher-internazionale .logo-publisher {
      width: 10rem;
    }
  }

  .header--publisher-taz .logo-publisher {
    margin-top: 0;
    width: 4rem;
  }

  .header--publisher-hvg .logo-publisher {
    margin-top: 0.3rem;
    width: 2rem;
  }

  @media ${mq.tablet} {
    .header--publisher-hvg .logo-publisher {
      width: 3rem;
    }
  }

  .header--publisher-liberation .logo-publisher {
    margin-top: 0.2rem;
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

  :global(.header:not(.header--publisher-hvg):not(.header--publisher-liberation)
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
    font-size: 0.575rem;
    font-style: normal;
    font-weight: ${fonts.sansSerif.weight.bold};
    letter-spacing: 2px;
    margin-left: 0.5rem;
    text-transform: uppercase;
  }

  @media ${mq.phone} {
    .title {
      font-size: 0.675rem;
      margin-left: 1rem;
    }
  }

  @media ${mq.tablet} {
    .title {
      font-size: 0.875rem;
    }
  }

  .research-network {
    display: block;
    font-size: 0.55rem;
    font-weight: ${fonts.sansSerif.weight.regular};
    letter-spacing: 1px;
    line-height: 1.2;
  }

  @media ${mq.phone} {
    .research-network {
      font-size: 0.6rem;
      letter-spacing: 2px;
    }
  }

  @media ${mq.tablet} {
    .research-network {
      display: inline-block;
      font-size: 0.825rem;
      margin-left: 0.25rem;
    }
  }

  .share {
    align-self: flex-end;
    color: currentColor;
    font-size: 0;
    line-height: 1;
    margin-left: auto;
    position: relative;
    top: -0.3rem;
  }

  @media ${mq.phone} {
    .share {
      margin-right: 1rem;
      top: 0;
    }
  }

  @media ${mq.tablet} {
    .share {
      margin-right: 1.5rem;
    }
  }

  .share-label {
    display: none;
    font-family: ${fonts.sansSerif.family};
    font-size: 0.9rem;
    font-weight: ${fonts.sansSerif.weight.regular};
    margin-right: 0.75rem;
    position: relative;
    top: -0.35rem;
  }

  @media ${mq.tablet} {
    .share-label {
      display: inline-block;
    }
  }

  .share-button {
    color: currentColor;
    cursor: pointer;
    line-height: 1;
  }

  .share-button:hover,
  .share-button:focus {
    color: rgb(231, 84, 75);
  }

  .share-button + .share-button {
    margin-left: 0.5rem;
  }

  @media ${mq.tablet} {
    .share-button + .share-button {
      margin-left: 1rem;
    }
  }

  .share-button-label {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }

  :global(.share-button svg) {
    height: 1rem;
    width: 1rem;
  }

  @media ${mq.phone} {
    :global(.share-button svg) {
      height: 1.25rem;
      width: 1.25rem;
    }
  }

  @media ${mq.tablet} {
    :global(.share-button svg) {
      height: 1.45rem;
      width: 1.45rem;
    }
  }
`;
