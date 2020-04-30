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

  @media only screen and (min-width: 768px) {
    width: ${(props: ContentWrapperProps) =>
      `calc(${props.width}% + ${props.widthOffset}px`});
  }
`;

export const Content = styled.div`
  background: #e5e5e5;
  padding-left: 30px;
  padding-right: 30px;

  @media only screen and (min-width: 768px) {
    max-width: ${(props: ContentProps) => `${props.maxWidth}px`};
    padding-left: 57px;
    padding-top: 37px;
    padding-right: 137px;
    overflow: auto;
  }
`;
