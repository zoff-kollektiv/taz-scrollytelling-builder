import css from 'styled-jsx/css';

import '../../assets/fonts/inter-ui-regular.woff2';
import '../../assets/fonts/inter-ui-regular.woff';

import '../../assets/fonts/inter-ui-italic.woff2';
import '../../assets/fonts/inter-ui-italic.woff';

import '../../assets/fonts/inter-ui-medium.woff2';
import '../../assets/fonts/inter-ui-medium.woff';

import '../../assets/fonts/inter-ui-medium-italic.woff2';
import '../../assets/fonts/inter-ui-medium-italic.woff';

import '../../assets/fonts/inter-ui-bold.woff2';
import '../../assets/fonts/inter-ui-bold.woff';

import '../../assets/fonts/inter-ui-bold-italic.woff2';
import '../../assets/fonts/inter-ui-bold-italic.woff';

import '../../assets/fonts/inter-ui-black.woff2';
import '../../assets/fonts/inter-ui-black.woff';

import '../../assets/fonts/inter-ui-black-italic.woff2';
import '../../assets/fonts/inter-ui-black-italic.woff';

const path = './assets/fonts';

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

  @font-face {
    font-family: 'Inter UI';
    font-style: normal;
    font-weight: 400;
    src: url('${path}/inter-ui-regular.woff2') format('woff2'),
      url('${path}/inter-ui-regular.woff') format('woff');
  }

  @font-face {
    font-family: 'Inter UI';
    font-style: italic;
    font-weight: 400;
    src: url('${path}/inter-ui-italic.woff2') format('woff2'),
      url('${path}/inter-ui-italic.woff') format('woff');
  }

  @font-face {
    font-family: 'Inter UI';
    font-style: normal;
    font-weight: 500;
    src: url('${path}/inter-ui-medium.woff2') format('woff2'),
      url('${path}/inter-ui-medium.woff') format('woff');
  }

  @font-face {
    font-family: 'Inter UI';
    font-style: italic;
    font-weight: 500;
    src: url('${path}/inter-ui-medium-italic.woff2') format('woff2'),
      url('${path}/inter-ui-medium-italic.woff') format('woff');
  }

  @font-face {
    font-family: 'Inter UI';
    font-style: normal;
    font-weight: 700;
    src: url('${path}/inter-ui-bold.woff2') format('woff2'),
      url('${path}/inter-ui-bold.woff') format('woff');
  }

  @font-face {
    font-family: 'Inter UI';
    font-style: italic;
    font-weight: 700;
    src: url('${path}/inter-ui-bold-italic.woff2') format('woff2'),
      url('${path}/inter-ui-bold-italic.woff') format('woff');
  }

  @font-face {
    font-family: 'Inter UI';
    font-style: normal;
    font-weight: 900;
    src: url('${path}/inter-ui-black.woff2') format('woff2'),
      url('${path}/inter-ui-black.woff') format('woff');
  }

  @font-face {
    font-family: 'Inter UI';
    font-style: italic;
    font-weight: 900;
    src: url('${path}/inter-ui-black-italic.woff2') format('woff2'),
      url('${path}/inter-ui-black-italic.woff') format('woff');
  }
`;
