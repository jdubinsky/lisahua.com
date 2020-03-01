import { createGlobalStyle } from "styled-components";

import Avenir from "./assets/fonts/AvenirRoman.otf";
import Beau from "./assets/fonts/BeauRegular.ttf";

export default createGlobalStyle`
  @font-face {
    font-family: Avenir;
    src: local('Avenir'), local('Avenir'),
    url(${Avenir}) format('otf'),
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: Beau;
    src: local('Beau'), local('Beau'),
    url(${Beau}) format('tff'),
    font-weight: 300;
    font-style: normal;
  }
`;
