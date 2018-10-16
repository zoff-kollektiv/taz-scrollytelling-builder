import css from 'styled-jsx/css';

export default css`
  :global(.modal) {
    background-color: white;
    border-radius: 5px;
    left: 50%;
    max-height: 80vh;
    overflow-y: auto;
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

  .content {
    padding: 1rem 2rem 2rem 2rem;
  }

  .header {
    background-color: #efefef;
    display: flex;
    padding: 0.75rem 1rem;
  }

  .close {
    align-self: flex-end;
    background: white;
    border: none;
    cursor: pointer;
    margin-left: auto;
    padding: 0.35rem 0.5rem 0.25rem 0.5rem;
  }

  .close:hover,
  .close:focus {
    background-color: black;
    color: white;
  }

  :global(.close svg path) {
    fill: currentColor;
  }

  .close__label {
    position: absolute;
    clip: rect(1px, 1px, 1px, 1px);
    padding: 0;
    border: 0;
    height: 1px;
    width: 1px;
    overflow: hidden;
  }
`;
