import css from 'styled-jsx/css';

export default css`
  .blockquote {
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: 1.5rem 0 3rem;
    padding-top: 1rem;
    position: relative;
  }

  .icon-container {
    text-align: center;
  }

  /* Blockquote text */
  :global(.blockquote p:not(.author)) {
    font-size: 2rem;
    font-weight: bold;
  }
`;
