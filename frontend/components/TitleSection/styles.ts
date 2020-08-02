import styled from "styled-components";

import { AvenirFontDiv, BeauFontDiv, MarginDiv, MarginA } from "../../text-styles";

const MIN_WIDTH = "1000px";
const MIN_TABLET_WIDTH = "768px";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;

  @media only screen and (min-width: ${MIN_WIDTH}) {
    flex-direction: row;
    justify-content: center;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 960px;
`;

export const TitleText = styled.div`
  font-family: Beau;
  font-size: 48px;
  padding-top: 50px;
  padding-bottom: 30px;
`;

export const TitleSubText = styled.div`
  font-family: Beau;
  font-size: 20px;
  padding-bottom: 30px;
`;
