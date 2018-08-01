import css from 'styled-jsx/css';

export default css`
  .blockquote {
    font-size: 1.2rem;
    font-style: italic;
    font-weight: bold;
    line-height: 1.4;
    margin: 1.5rem 0 3rem;
    padding-top: 1rem;
    position: relative;
  }

  .blockquote::before {
    content: '';
    border-top: 3px solid red;
    left: 0;
    position: absolute;
    top: 0;
    width: 3rem;
  }
`;
