import css from 'styled-jsx/css';

import { fonts, mq } from '../../tokens';

export default css`
  .infobox {
    background-color: rgb(242, 242, 242);
    margin-bottom: 3rem;
    margin-top: 3rem;
    padding: 1rem 0 2rem 0;
    position: relative;
  }

  @media ${mq.tablet} {
    .infobox {
      margin-bottom: 4rem;
      margin-top: 7rem;
      padding-bottom: 3rem;
      padding-top: 3rem;
    }
  }

  .logo-container {
    left: 50%;
    position: absolute;
    top: 0;
    transform: translate(-50%, -50%);
  }

  :global(.infobox p) {
    font-family: ${fonts.sansSerif.family};
    font-size: 0.9rem;
    font-weight: ${fonts.sansSerif.weight.regular};
    letter-spacing: 0.015rem;
    line-height: 1.5;
  }

  @media ${mq.tablet} {
    :global(.infobox p) {
      font-size: 1.125rem;
      line-height: 1.61;
    }
  }

  :global(.infobox .logo-container svg) {
    height: 2.5rem;
    width: 2.5rem;
  }

  @media ${mq.phone} {
    :global(.infobox .logo-container svg) {
      height: 3rem;
      width: 3rem;
    }
  }

  @media ${mq.tablet} {
    :global(.infobox .logo-container svg) {
      height: 3.75rem;
      width: 3.75rem;
    }
  }

  .publishers {
    align-items: center;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    margin-top: 3rem;
  }

  :global(.infobox svg) {
    height: 0.65rem;
  }

  @media ${mq.phone} {
    :global(.infobox svg) {
      height: 1rem;
    }
  }

  @media ${mq.tablet} {
    :global(.infobox svg) {
      height: 1.3rem;
    }
  }
`;
