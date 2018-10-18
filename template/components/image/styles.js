import css from 'styled-jsx/css';

import { mq } from '../../tokens';

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
    max-width: 732px;
  }

  // Make caption same width as the image https://stackoverflow.com/questions/4979487/image-caption-width-to-same-as-image
  .figure--dimension-portrait {
    display: table;
    margin-left: auto;
    margin-right: auto;
  }

  .image {
    height: auto;
    width: 100%;
  }

  .figure--dimension-portrait .image {
    height: auto;
    max-width: 100%;
    width: auto;
  }

  // Make caption same width as the image https://stackoverflow.com/questions/4979487/image-caption-width-to-same-as-image
  .figure--dimension-portrait .caption-container {
    caption-side: bottom;
    display: table-caption;
  }
`;
