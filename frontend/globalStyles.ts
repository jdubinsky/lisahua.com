import { createGlobalStyle } from "styled-components";

const IS_DEV = process.env.NODE_ENV === "development";
console.log(IS_DEV, process.env.NODE_ENV);

const beauFontUrl = IS_DEV ? "https://lisahua.com/fonts/BeauRegular.ttf" : "../fonts/BeauRegular.ttf";
const avenirFontUrl = IS_DEV ? "https://lisahua.com/fonts/Avenir-Roman.ttf" : "../fonts/Avenir-Roman.ttf";

export default createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }

  a {
    text-decoration: none;
    color: black;
  }

  button {
    all: unset;
  }

  button:focus {
    outline: orange 5px auto;
  }

  @font-face {
    font-family: Avenir;
    src:
      url('${avenirFontUrl}') format('truetype');
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
