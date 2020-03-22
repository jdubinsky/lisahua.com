import styled from "styled-components";

import { AvenirFontDiv, BeauFontDiv, MarginDiv } from "../../text-styles";

export const Footer = styled(MarginDiv)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15px;
  margin-left: -30px;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
  }
`;

export const LeftFooter = styled(AvenirFontDiv)`
  display: flex;
  font-size: 16px;
`;

export const RightFooter = styled(BeauFontDiv)`
  display: flex;
  font-size: 20px;
`;
