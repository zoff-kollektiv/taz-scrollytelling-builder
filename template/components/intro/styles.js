import css from 'styled-jsx/css';

import { mq } from '../../tokens';

export default css`
  .image-container {
    background-attachment: fixed;
    background-color: #0e0e0e;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 90vh;
    overflow: hidden;
    position: relative;
  }

  .image-container::after {
    background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.9),
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.2),
      transparent
    );
    bottom: 0;
    content: '';
    height: 50%;
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
