import { createGlobalStyle } from "styled-components";

const beauFontUrl = `${process.env.STATIC_URL}fonts/BeauRegular.ttf`;
const avenirFontUrl = `${process.env.STATIC_URL}fonts/Avenir-Roman.ttf`;

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
