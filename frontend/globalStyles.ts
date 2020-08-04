import { createGlobalStyle } from "styled-components";

const beauFontUrl = "../fonts/BeauRegular.ttf";
const avenirFontUrl = "../fonts/Avenir-Roman.ttf";

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
    font-family: avenir-roman;
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
