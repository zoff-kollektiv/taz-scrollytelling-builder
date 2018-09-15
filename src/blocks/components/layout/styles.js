import css from 'styled-jsx/css';

import './fonts/poppins.ttf';
import './fonts/poppins.woff';
import './fonts/poppins-bold.ttf';
import './fonts/poppins-bold.woff';
import './fonts/poppins-italic.ttf';
import './fonts/poppins-italic.woff';
import './fonts/poppins-bold-italic.ttf';
import './fonts/poppins-bold-italic.woff';

export default css`
  body {
    margin: 0;
    padding: 0;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    src:
      local('Poppins'),
      local('Poppins Regular'),
      local('Poppins-Regular'),
      url(./fonts/poppins.woff) format('woff'),
      url(./fonts/poppins.ttf) format('truetype');
  }

  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    src:
      local('Poppins Bold'),
      local('Poppins-Bold'),
      url(./fonts/poppins-bold.woff) format('woff'),
      url(./fonts/poppins-bold.ttf) format('truetype');
  }

  @font-face {
    font-family: 'Poppins';
    font-style: italic;
    font-weight: 400;
    src:
      local('Poppins Italic'),
      local('Poppins-Italic'),
      url(./fonts/poppins-italic.woff) format('woff'),
      url(./fonts/poppins-italic.ttf) format('truetype');
  }

  @font-face {
    font-family: 'Poppins';
    font-style: italic;
    font-weight: 700;
    src:
      local('Poppins Bold Italic'),
      local('Poppins-BoldItalic'),
      url(./fonts/poppins-bold-italic.woff) format('woff'),
      url(./fonts/poppins-bold-italic.ttf) format('truetype');
  }
`;
