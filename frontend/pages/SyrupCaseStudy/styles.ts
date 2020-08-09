import styled from "styled-components";

import { AvenirFontDiv, BeauFontDiv, MarginDiv } from "../../text-styles";

const MIN_WIDTH = "1000px";

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  background: #ebe9e4;

  @media only screen and (min-width: ${MIN_WIDTH}) {
    justify-content: center;
  }
`;

export const PaddedContent = styled(Container)`
  padding-left: 15px;
  padding-right: 15px;

  @media only screen and (min-width: ${MIN_WIDTH}) {
    padding-left: 150px;
    padding-right: 30px;
  }
`;

export const SubHeader = styled(AvenirFontDiv)`
  font-size: 16px;
`;

export const Column = styled(MarginDiv)`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  width: 100%;
`;

export const Text = styled(BeauFontDiv)`
  font-size: 20px;
`;

export const LightText = styled.span`
  color: #727272;
  margin-left: 5px;
`;
