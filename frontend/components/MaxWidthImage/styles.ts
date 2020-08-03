import styled from "styled-components";

export const MaxWidthImage = styled.img`
  height: auto;
  width: 100%;
  max-width: 100%;
  max-height: 100%;
  align-self: flex-end;
`;

export const ClickableMaxWidthImage = styled(MaxWidthImage)`
  cursor: pointer;
`;
