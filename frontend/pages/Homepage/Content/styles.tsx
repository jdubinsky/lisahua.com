import { h } from "preact";
import styled from "styled-components";

import LockIcon from "../../../icons/Lock";
import { AvenirFontDiv, BeauFontDiv, MarginDiv } from "../../../text-styles";

export const SpacerDiv = styled(MarginDiv)``;

export const CaseStudyContainer = styled(MarginDiv)`
  max-width: 730px;
  display: flex;
  flex-direction: column;
`;

export const Header = styled(BeauFontDiv)`
  font-size: 32px;
`;

export const Text = styled(BeauFontDiv)`
  max-width: 379px;
  font-size: 20px;
`;

export const CallToActionContainer = styled(MarginDiv)`
  display: flex;
  align-items: center;
  margin-bottom: 45px;

  @media only screen and (min-width: 768px) {
    margin-bottom: 0px;
  }
`;

export const CallToActionText = styled(AvenirFontDiv)`
  font-weight: 800;
  font-size: 18px;
`;

export const ImageWrapper = styled(MarginDiv)`
  height: auto;
  max-width: 100%;

  @media only screen and (min-width: 768px) {
    display: flex;
    align-self: flex-end;
    justify-content: flex-end;
  }
`;

export const ImageWrapperOld = styled(MarginDiv)`
  display: flex;
  align-self: flex-start;
  justify-content: flex-start;
  margin-right: 12px;
  overflow: hidden;

  @media only screen and (min-width: 768px) {
    align-self: flex-end;
    justify-content: flex-end;
  }
`;

export const MaxWidthImage = styled.img`
  height: auto;
  max-width: 100%;
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
