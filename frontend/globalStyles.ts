import { createGlobalStyle } from "styled-components";

import Avenir from "./assets/fonts/AvenirRoman.otf";

const beauFontUrl = `${process.env.STATIC_URL}fonts/BeauRegular.ttf`;

export default createGlobalStyle`
  @font-face {
    font-family: Avenir;
    src:
      local('Avenir'), format('otf'),
      url('${Avenir}') format('otf');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: Beau;
    src:
      url('${beauFontUrl}') format('truetype');
    font-weight: 300;
    font-style: normal;
  }
`;
