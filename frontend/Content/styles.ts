import styled from "styled-components";

interface MarginProps {
  marginLeft?: string;
  marginTop?: string;
}

const MarginDiv = styled.div<MarginProps>`
  margin-top: ${props => props.marginTop || "0px"};
  margin-left: ${props => props.marginLeft || "0px"};
`;

export const Content = styled(MarginDiv)`
  width: 65%;
  padding: 10px;
  padding-left: 90px;
  padding-top: 112px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  background: #E5E5E5;
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
`

const AvenirFontBase = styled(MarginDiv)`
  font-family: Avenir;
  font-style: normal;
  font-weight: normal;
`;

export const CallToActionText = styled(AvenirFontBase)`
  font-weight: 800;
  font-size: 18px;
`;

export const ImageWrapper = styled(MarginDiv)`
  display: flex;
  align-self: flex-end;
  margin-right: 12px;
  border-radius: 25px;
  overflow: hidden;
`;