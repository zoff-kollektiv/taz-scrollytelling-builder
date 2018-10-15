import css from 'styled-jsx/css';

import './poppins.ttf';
import './poppins.woff';
import './poppins-bold.ttf';
import './poppins-bold.woff';
import './poppins-italic.ttf';
import './poppins-italic.woff';
import './poppins-bold-italic.ttf';
import './poppins-bold-italic.woff';

import './lora.ttf';
import './lora.woff';
import './lora-bold.ttf';
import './lora-bold.woff';
import './lora-italic.ttf';
import './lora-italic.woff';
import './lora-bold-italic.ttf';
import './lora-bold-italic.woff';

const path = './assets/fonts';

export default css`
  @font-face {
    font-display: swap;
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
    font-display: swap;
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
    font-display: swap;
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
    font-display: swap;
    font-family: 'Poppins';
    font-style: italic;
    font-weight: 700;
    src:
      local('Poppins Bold Italic'),
      local('Poppins-BoldItalic'),
      url('${path}/poppins-bold-italic.woff') format('woff'),
      url('${path}/poppins-bold-italic.ttf') format('truetype');
  }

  @font-face {
    font-display: swap;
    font-family: 'Lora';
    font-style: normal;
    font-weight: 400;
    src: local('Lora'),
         local('Lora Regular'),
         local('Lora-Regular'),
         url(${path}/lora.woff) format('woff'),
         url(${path}/lora.ttf) format('truetype');
  }

  @font-face {
    font-display: swap;
    font-family: 'Lora';
    font-style: normal;
    font-weight: 700;
    src: local('Lora Bold'),
         local('Lora-Bold'),
         url(${path}/lora-bold.woff) format('woff'),
         url(${path}/lora-bold.ttf) format('truetype');
  }

  @font-face {
    font-display: swap;
    font-family: 'Lora';
    font-style: italic;
    font-weight: 400;
    src: local('Lora Italic'),
         local('Lora-Italic'),
         url(${path}/lora-italic.woff) format('woff'),
         url(${path}/lora-italic.ttf) format('truetype');
  }

  @font-face {
    font-display: swap;
    font-family: 'Lora';
    font-style: italic;
    font-weight: 700;
    src: local('Lora Bold Italic'),
         local('Lora-BoldItalic'),
         url(${path}/lora-bold-italic.woff) format('woff'),
         url(${path}/lora-bold-italic.ttf) format('truetype');
  }
`;
