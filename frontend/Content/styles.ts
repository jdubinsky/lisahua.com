import styled from "styled-components";

interface MarginProps {
  marginLeft?: string;
  marginTop?: string;
}

const MarginDiv = styled.div<MarginProps>`
  margin-top: ${props => props.marginTop || "0px"};
  margin-bottom: ${props => props.marginBottom || "0px"};
  margin-left: ${props => props.marginLeft || "0px"};
  margin-right: ${props => props.marginRight || "0px"};
`;

export const Content = styled(MarginDiv)`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  padding: 10px;
  background: #e5e5e5;

  @media only screen and (min-width: 768px) {
    width: 65%;
    padding-left: 90px;
    padding-top: 112px;
    overflow: auto;
  }
`;

const BeauFontBase = styled(MarginDiv)`
  font-family: Beau;
  font-style: normal;
  font-weight: normal;
`;

export const CaseStudyContainer = styled(MarginDiv)`
  max-width: 730px;
  display: flex;
  flex-direction: column;
`;

export const Header = styled(BeauFontBase)`
  font-size: 32px;
`;

export const Text = styled(BeauFontBase)`
  max-width: 379px;
  font-size: 20px;
`;

const AvenirFontBase = styled(MarginDiv)`
  font-family: Avenir;
  font-style: normal;
  font-weight: normal;
`;

export const CallToActionContainer = styled(MarginDiv)`
  display: flex;
  align-items: center;
`;

export const CallToActionText = styled(AvenirFontBase)`
  font-weight: 800;
  font-size: 18px;
`;

export const ImageWrapper = styled(MarginDiv)`
  display: flex;
  align-self: flex-end;
  margin-right: 12px;
  overflow: hidden;
`;

export const Footer = styled(MarginDiv)`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const LeftFooter = styled(AvenirFontBase)`
  display: flex;
  font-size: 16px;
`;

export const RightFooter = styled(BeauFontBase)`
  display: flex;
  font-size: 20px;
  margin-right: 79px;
`;
