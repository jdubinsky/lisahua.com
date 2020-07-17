import { createGlobalStyle } from "styled-components";

const beauFontUrl = "../fonts/BeauRegular.ttf";
const beauWoffUrl = "../fonts/beau-regular.woff";
const avenirFontUrl = "../fonts/Avenir-Roman.ttf";
const aveniorWoffUrl = "../fonts/avenior-roman.woff";

export default createGlobalStyle`
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
      url('${aveniorWoffUrl}') format('woff');
      url('${avenirFontUrl}') format('truetype');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: Beau;
    src:
      url('${beauWoffUrl}') format('woff');
      url('${beauFontUrl}') format('truetype');
    font-weight: 300;
    font-style: normal;
  }
`;
