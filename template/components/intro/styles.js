import css from 'styled-jsx/css';

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
`;
