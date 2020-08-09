import styled from "styled-components";

interface ContentWrapperProps {
  width: number;
  widthOffset: number;
}

export const ContentWrapper = styled.div<ContentWrapperProps>`
  padding: 10px;
  width: 100%;
  background: #ebe9e4;
  overflow-y: scroll;
`;

export const Content = styled.div`
  background: #ebe9e4;
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
