import css from 'styled-jsx/css';

import './poppins.ttf';
import './poppins.woff';
import './poppins-bold.ttf';
import './poppins-bold.woff';
import './poppins-italic.ttf';
import './poppins-italic.woff';

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
      url('${path}/poppins.woff') format('woff'),
      url('${path}/poppins.ttf') format('truetype');
  }

  @font-face {
    font-display: swap;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    src:
      url('${path}/poppins-bold.woff') format('woff'),
      url('${path}/poppins-bold.ttf') format('truetype');
  }

  @font-face {
    font-display: swap;
    font-family: 'Poppins';
    font-style: italic;
    font-weight: 400;
    src:
      url('${path}/poppins-italic.woff') format('woff'),
      url('${path}/poppins-italic.ttf') format('truetype');
  }

  @font-face {
    font-display: swap;
    font-family: 'Lora';
    font-style: normal;
    font-weight: 400;
    src: url(${path}/lora.woff) format('woff'),
         url(${path}/lora.ttf) format('truetype');
  }

  @font-face {
    font-display: swap;
    font-family: 'Lora';
    font-style: normal;
    font-weight: 700;
    src: url(${path}/lora-bold.woff) format('woff'),
         url(${path}/lora-bold.ttf) format('truetype');
  }

  @font-face {
    font-display: swap;
    font-family: 'Lora';
    font-style: italic;
    font-weight: 700;
    src: url(${path}/lora-bold-italic.woff) format('woff'),
         url(${path}/lora-bold-italic.ttf) format('truetype');
  }

  @font-face {
    font-display: swap;
    font-family: 'Lora';
    font-style: italic;
    font-weight: 400;
    src: url(${path}/lora-italic.woff) format('woff'),
         url(${path}/lora-italic.ttf) format('truetype');
  }
`;
