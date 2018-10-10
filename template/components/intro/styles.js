import css from 'styled-jsx/css';

export default css`
  .intro {
    margin-bottom: 4rem;
  }

  .image-container {
    background-color: #ececec;
    height: 90vh;
    overflow: hidden;
    position: relative;
  }

  .background-image {
    left: 50%;
    min-height: 100%;
    min-width: 100%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: auto;
    z-index: 1;
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

  .publication-date {
    display: block;
    text-align: center;
    text-decoration: underline;
  }

  .authors {
    text-align: center;
  }
`;
