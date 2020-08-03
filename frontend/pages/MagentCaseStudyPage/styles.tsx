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

export const SmallHeader = styled(AvenirFontDiv)`
  font-weight: 700;
  font-size: 18px;
`;

export const SubHeader = styled(AvenirFontDiv)`
  font-size: 16px;
`;

export const Column = styled(MarginDiv)`
  display: flex;
  flex-direction: column;
`;

export const Text = styled(BeauFontDiv)`
  font-size: 20px;
`;

export const BigQuote = styled(AvenirFontDiv)`
  font-size: 36px;
  font-weight: 700;
  text-align: center;
  padding-left: 0px;
  padding-right: 0px;

  @media only screen and (min-width: 768px) {
    padding-left: 60px;
    padding-right: 60px;
  }
`;

export const LightText = styled.span`
  color: #727272;
  margin-left: 5px;
`;

export const BigLightText = styled(BeauFontDiv)`
  color: #727272;
  font-size: 20px;
  text-align: center;
`;

export const Link = styled.a`
  margin-left: 5px;
  text-decoration: underline;
`;

export const TitleSubSection = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  max-width: 960px;
  padding-top: 30px;

  @media only screen and (min-width: ${MIN_WIDTH}) {
    flex-direction: row;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  max-width: 960px;
`;

export const SectionTitle = styled.div`
  font-family: avenir-roman;
  font-size: 36px;
  font-weight: 800;
  margin-top: 30px;
  margin-bottom: 15px;
`;

export const PaddedContent = styled(Container)`
  padding-left: 30px;
  padding-right: 30px;
`;
