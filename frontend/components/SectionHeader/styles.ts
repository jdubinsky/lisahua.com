import styled from "styled-components";

import { AvenirFontDiv, BeauFontDiv, MarginDiv } from "../../text-styles";

export const Table = styled(MarginDiv)`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Column = styled(MarginDiv)`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  width: 100%;

  @media only screen and (min-width: 768px) {
    width: ${props => props.width || "100%"};
  }
`;

export const Section = styled(AvenirFontDiv)`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 15px;
`;

export const BigText = styled(BeauFontDiv)`
  white-space: pre-line;
  font-size: 20px;
`;
