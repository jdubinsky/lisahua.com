import styled from "styled-components";

import { AvenirFontDiv, BeauFontDiv, MarginDiv } from "../../text-styles";

export const AvenirText = styled(AvenirFontDiv)``;
export const BeauText = styled(BeauFontDiv)``;
export const SpacerDiv = styled(MarginDiv)``;

export const Title = styled(BeauFontDiv)`
  font-size: 60px;
`;

export const BoldText = styled(AvenirFontDiv)`
  font-weight: 800;
  font-size: 18px;
`;

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  padding-top: 50px;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    overflow: hidden;
    height: 100vh;
    padding-top: 0px;
  }
`;

export const SmallHeader = styled(AvenirFontDiv)`
  font-weight: 700;
  font-size: 18px;
`;

export const SubHeader = styled(AvenirFontDiv)`
  font-size: 16px;
`;

export const CenteredTable = styled(MarginDiv)`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const Column = styled(MarginDiv)`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  width: 100%;

  @media only screen and (min-width: 768px) {
    width: ${(props) => props.width || "100%"};
  }
`;

export const Text = styled(BeauFontDiv)`
  white-space: pre-line;
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

export const MaxWidthImage = styled.img`
  cursor: pointer;
  width: 100%;
  max-width: 100%;
`;

export const CustomerImage = styled.img`
  cursor: pointer;
  height: 250px;

  @media only screen and (min-width: 768px) {
    height: 350px;
  }
`;

export const BlackBackgroundImage = styled(MarginDiv)`
  cursor: pointer;
  display: flex;
  justify-content: center;
  background-color: black;
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

export const BulletList = styled.ul`
  margin-bottom: 30px;
`;

export const ListItem = styled.li`
  font-family: Beau;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  margin-bottom: 15px;
`;

export const Link = styled.a`
  margin-left: 5px;
  text-decoration: underline;
`;
