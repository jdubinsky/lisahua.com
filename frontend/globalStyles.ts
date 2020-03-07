import { createGlobalStyle } from "styled-components";

import Avenir from "./assets/fonts/AvenirRoman.otf";
// import Beau from "./assets/fonts/BeauRegular.ttf";

const beauFontUrl = `${process.env.STATIC_URL}fonts/BeauRegular.ttf`;
// const beauFontUrl = `fonts/BeauRegular.ttf`;
console.log("load font", beauFontUrl)

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
