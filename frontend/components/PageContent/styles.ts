import styled from "styled-components";

interface ContentWrapperProps {
  width: number;
  widthOffset: number;
}

interface ContentProps {
  maxWidth: number;
}

export const ContentWrapper = styled.div<ContentWrapperProps>`
  padding: 10px;
  width: 100%;
  background: #e5e5e5;
  overflow-y: scroll;
  max-width: 1000px;
`;

export const Content = styled.div`
  background: #e5e5e5;
  padding-left: 30px;
  padding-right: 30px;

  @media only screen and (min-width: 768px) {
    max-width: 915px;
    padding-left: 57px;
    padding-top: 37px;
    padding-right: 137px;
    overflow: auto;
  }
`;
