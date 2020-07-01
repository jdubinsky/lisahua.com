import styled from "styled-components";

import { AvenirFontDiv, MarginDiv } from "../../text-styles";
import isMobile from "../../is-mobile";

export const BoldText = styled(AvenirFontDiv)`
  font-weight: 800;
  font-size: 18px;
`;

export const HeaderContent = styled(MarginDiv)`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  background: ${isMobile() ? "#ffffff" : "#e5e5e5"};
  width: 100%;
  padding-left: 10px;
  padding-top: 30px;
  padding-bottom: 20px;
`;

export const PushDiv = styled.div`
  margin-bottom: 30px;
  background: #e5e5e5;
`;
