import css from 'styled-jsx/css';

export default css`
  :global(body) {
    margin: 0;
    padding: 0;
  }

  :global(*),
  :global(*::before),
  :global(*::after) {
    box-sizing: border-box;
  }
`;
