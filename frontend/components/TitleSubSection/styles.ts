import styled from "styled-components";

const MIN_WIDTH = "1000px";

export const TitleSubSection = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: space-between;
  max-width: 960px;
  padding-top: 30px;
  width: 100%;

  @media only screen and (min-width: ${MIN_WIDTH}) {
    flex-direction: row;
  }
`;

export const LeftColumn = styled.div`
  max-width: 510px;
`;
export const RightColumn = styled.div``;
