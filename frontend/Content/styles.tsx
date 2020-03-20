import { h } from "preact";
import styled from "styled-components";

import LockIcon from "../icons/Lock";

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
  overflow-y: scroll;
  padding-top: 60px;
  padding-left: 30px;
  padding-right: 30px;
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
  margin-bottom: 45px;

  @media only screen and (min-width: 768px) {
    margin-bottom: 0px;
  }
`;

export const CallToActionText = styled(AvenirFontBase)`
  font-weight: 800;
  font-size: 18px;
`;

export const ImageWrapper = styled(MarginDiv)`
  display: flex;
  align-self: flex-start;
  margin-right: 12px;
  overflow: hidden;

  @media only screen and (min-width: 768px) {
    align-self: flex-end;
  }
`;

export const RelativeImageWrapper = styled(ImageWrapper)`
  position: relative;
`;

const Lock = ({ className }) => {
  return <LockIcon className={className} />;
};

export const LockIconWrapper = styled(Lock)`
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const Footer = styled(MarginDiv)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15px;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
    max-width: 730px;
  }
`;

export const LeftFooter = styled(AvenirFontBase)`
  display: flex;
  font-size: 16px;
  margin-left: -30px;

  @media only screen and (min-width: 768px) {
    margin-left: 0px;
  }
`;

export const RightFooter = styled(BeauFontBase)`
  display: flex;
  font-size: 20px;
`;
