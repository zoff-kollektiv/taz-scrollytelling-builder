import css from 'styled-jsx/css';

export default css`
  :global(.modal) {
    background-color: white;
    left: 50%;
    max-height: 80vh;
    overflow-y: auto;
    padding: 2rem;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 80vw;
  }

  :global(.modal-overlay) {
    background-color: rgba(0, 0, 0, 0.85);
    bottom: 0;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 100;
  }
`;
