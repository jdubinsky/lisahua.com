import styled from "styled-components";

import { AvenirFontDiv, BeauFontDiv, MarginDiv } from "../../text-styles";

const MIN_WIDTH = "1000px";

export const AvenirText = styled(AvenirFontDiv)``;
export const BeauText = styled(BeauFontDiv)``;
export const SpacerDiv = styled(MarginDiv)``;

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  background: #e5e5e5;

  @media only screen and (min-width: ${MIN_WIDTH}) {
    justify-content: center;
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

  @media only screen and (min-width: 768px) {
    width: 100%;
  }
`;

export const Text = styled(BeauFontDiv)`
  font-size: 20px;
`;

export const LightText = styled.span`
  color: #727272;
  margin-left: 5px;
`;

export const PaddedContent = styled(Container)`
  padding-left: 30px;
  padding-right: 30px;
`;
