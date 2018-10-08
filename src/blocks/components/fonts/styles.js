import css from 'styled-jsx/css';

const path = './assets/fonts';

import './poppins.ttf';
import './poppins.woff';
import './poppins-bold.ttf';
import './poppins-bold.woff';
import './poppins-italic.ttf';
import './poppins-italic.woff';
import './poppins-bold-italic.ttf';
import './poppins-bold-italic.woff';

export default css`
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    src:
      local('Poppins'),
      local('Poppins Regular'),
      local('Poppins-Regular'),
      url('${path}/poppins.woff') format('woff'),
      url('${path}/poppins.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    src:
      local('Poppins Bold'),
      local('Poppins-Bold'),
      url('${path}/poppins-bold.woff') format('woff'),
      url('${path}/poppins-bold.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Poppins';
    font-style: italic;
    font-weight: 400;
    src:
      local('Poppins Italic'),
      local('Poppins-Italic'),
      url('${path}/poppins-italic.woff') format('woff'),
      url('${path}/poppins-italic.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Poppins';
    font-style: italic;
    font-weight: 700;
    src:
      local('Poppins Bold Italic'),
      local('Poppins-BoldItalic'),
      url('${path}/poppins-bold-italic.woff') format('woff'),
      url('${path}/poppins-bold-italic.ttf') format('truetype');
  }
`;
