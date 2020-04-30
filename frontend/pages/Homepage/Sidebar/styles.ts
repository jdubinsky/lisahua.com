import styled from "styled-components";

import {
  AvenirFontDiv,
  BeauFontDiv,
  MarginDiv,
  MarginProps,
} from "../../../text-styles";

const MarginA = styled.a<MarginProps>`
  margin-top: ${(props) => props.marginTop || "0px"};
  margin-bottom: ${(props) => props.marginBottom || "0px"};
  margin-left: ${(props) => props.marginLeft || "0px"};
  margin-right: ${(props) => props.marginRight || "0px"};
`;

export const Title = styled(BeauFontDiv)`
  font-size: 105px;
`;

export const Subtitle = styled(BeauFontDiv)`
  font-size: 60px;
`;

export const Text = styled(BeauFontDiv)`
  margin-top: 30px;
  font-size: 24px;
`;

export const SmallText = styled(BeauFontDiv)`
  font-size: 20px;
`;

export const TextTable = styled(MarginDiv)``;

export const Row = styled(MarginDiv)`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  flex-direction: row;
`;

export const Header = styled(AvenirFontDiv)`
  font-size: 16px;
`;

export const TextWithIcon = styled(MarginDiv)`
  display: flex;
  align-items: center;
`;

export const Subtext = styled(AvenirFontDiv)`
  font-size: 16px;
`;

export const BoldText = styled(AvenirFontDiv)`
  font-weight: 800;
  font-size: 18px;
`;

export const ResumeContainer = styled(MarginDiv)`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 30px;
`;

export const CallToActionLink = styled(MarginA)``;

export const DogSubtitleText = styled(BeauFontDiv)`
  font-size: 16px;
`;

export const DogsContainer = styled(MarginDiv)``;

export const ButtonContainer = styled(MarginDiv)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const DogImagesContainer = styled(MarginDiv)`
  display: flex;
  flex-direction: row;
  margin-bottom: 90px;
`;

export const MarginRightImg = styled.img`
  margin-right: 60px;
`;
