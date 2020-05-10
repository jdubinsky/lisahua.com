import styled from "styled-components";

export const MaxWidthImage = styled.img`
  height: auto;
  width: 100%;
  max-width: 100%;
`;

export const ClickableMaxWidthImage = styled(MaxWidthImage)`
  cursor: pointer;
`;
