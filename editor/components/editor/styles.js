import css from 'styled-jsx/css';

export default css`
  .editor {
    padding-bottom: 4rem;
  }

  .editor__toolbar-marks {
    position: absolute;
    z-index: 200;
  }

  .editor__toolbar {
    bottom: 1rem;
    position: fixed;
    right: 1rem;
    z-index: 50;
  }
`;
