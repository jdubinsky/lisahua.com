import styled from "styled-components";

import { AvenirFontDiv, MarginDiv } from "../../text-styles";

export const BoldText = styled(AvenirFontDiv)`
  font-weight: 800;
  font-size: 18px;
`;

export const CenteredTable = styled(MarginDiv)`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const GoBackHeader = styled(CenteredTable)`
  position: fixed;
  top: 0;
  background: #e5e5e5;
  width: 100%;
  padding-top: 30px;
  padding-bottom: 30px;
`;

export const PushDiv = styled.div`
  margin-bottom: 30px;
  background: #e5e5e5;
`;
