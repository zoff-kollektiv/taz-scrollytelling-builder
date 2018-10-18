import css from 'styled-jsx/css';

import { mq } from '../../tokens';

export default css`
  .image-container-landscape {
    background-color: #0e0e0e;
  }

  .image-container-landscape,
  .image-container-portrait {
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 90vh;
    overflow: hidden;
    position: relative;
  }

  @media screen and (orientation: landscape) {
    .image-container-portrait {
      background-image: none !important;
    }
  }

  @media screen and (orientation: portrait) {
    .image-container-landscape {
      background-image: none !important;
    }
  }

  // only do this on larger screens, since mobile browsers are very very unreliable
  @media ${mq.tablet} {
    .image-container-landscape,
    .image-container-portrait {
      background-attachment: fixed;
    }
  }

  .image-container-portrait::after {
    background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.85),
      rgba(0, 0, 0, 0.55),
      rgba(0, 0, 0, 0.15),
      transparent
    );
    bottom: 0;
    content: '';
    height: 75%;
    left: 0;
    position: absolute;
    width: 100%;
  }

  .content {
    align-items: center;
    bottom: 4rem;
    color: white;
    display: flex;
    flex-direction: column;
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
    width: 100%;
    z-index: 2;
  }

  @media ${mq.tablet} {
    .content {
      width: 620px;
    }
  }

  @media ${mq.desktop} {
    .content {
      width: 750px;
    }
  }

  .publication-date {
    display: block;
    text-align: center;
    text-decoration: underline;
  }
`;
