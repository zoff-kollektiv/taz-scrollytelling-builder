import css from 'styled-jsx/css';

import { fonts, mq } from '../../tokens';

export default css`
  .figure {
    font-size: 0;
    line-height: 1;
    margin: 3rem 1.5rem;
    text-align: center;
  }

  @media ${mq.tablet} {
    .figure {
      margin: 5rem auto;
    }
  }

  .figure--is-full {
    margin: 5rem 0;
  }

  @media ${mq.tablet} {
    .figure--is-full {
      margin: 7rem 0;
    }
  }

  .figure--is-wide {
    max-width: 900px;
  }

  .figure--is-constraint {
    max-width: 780px;
  }

  // Make caption same width as the image https://stackoverflow.com/questions/4979487/image-caption-width-to-same-as-image
  .figure--dimension-portrait {
    display: table;
  }

  .image {
    height: auto;
    width: 100%;
  }

  .figure--dimension-portrait .image {
    height: auto;
    max-height: 80vh;
    width: auto;
  }

  .caption {
    color: rgb(159, 159, 159);
    font-family: ${fonts.sansSerif.family};
    font-size: 0.687rem;
    letter-spacing: 0.05rem;
    line-height: 1.5;
    margin-top: 0.5rem;
    text-align: left;
  }

  @media ${mq.tablet} {
    .caption {
      font-size: 0.875rem;
      margin-top: 1.25rem;
    }
  }

  // Make caption same width as the image https://stackoverflow.com/questions/4979487/image-caption-width-to-same-as-image
  .figure--dimension-portrait .caption {
    caption-side: bottom;
    display: table-caption;
    width: 100%;
  }
`;
