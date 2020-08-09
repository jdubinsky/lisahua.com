import styled from "styled-components";

import { AvenirFontDiv, BeauFontDiv, MarginDiv } from "../../text-styles";

const MIN_TABLET_WIDTH = "768px";

export const Footer = styled(MarginDiv)`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: space-between;
  max-width: 960px;
  width: 100%;
  margin-bottom: 15px;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const LeftFooter = styled(AvenirFontDiv)`
  display: flex;
  flex-direction: column;
  font-size: 16px;
`;

export const RightFooter = styled(BeauFontDiv)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: 20px;
`;

export const FooterText = styled.div`
  font-family: Avenir;
  font-size: 16px;
  color: #21282e;
  margin-right: 60px;
  max-width: 240px;

  @media only screen and (min-width: ${MIN_TABLET_WIDTH}) {
    max-width: none;
  }
`;

export const BoldFooterText = styled(FooterText)`
  font-weight: 800;
`;
