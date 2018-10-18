import css from 'styled-jsx/css';

import { mq } from '../../tokens';

export default css`
  .intro {
    margin-bottom: 2rem;
    position: relative;
  }

  @media ${mq.tablet} {
    .intro {
      margin-bottom: 3rem;
    }
  }
`;
