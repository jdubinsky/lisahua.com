import styled from "styled-components";

const MIN_WIDTH = "1000px";

export const Container = styled.div`
  background: #ebe9e4;
  display: flex;
  flex-direction: column;
  max-width: none;
  width: 100%;

  @media only screen and (min-width: ${MIN_WIDTH}) {
    max-width: 370px;
  }
`;

export const HighlightText = styled.div`
  font-family: Avenir;
  font-size: 16px;
  font-weight: normal;
  font-style: italic;
`;

export const Title = styled.div`
  font-family: Beau;
  font-size: 32px;
  margin-bottom: 12px;
`;

export const Content = styled.div`
  font-family: Beau;
  font-size: 20px;
`;

export const SmallSpacer = styled.div`
  height: 15px;
`;

export const Spacer = styled.div`
  height: 30px;
`;

export const ImgContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const FixedImg = styled.img`
  max-width: 370px;
  height: 213px;
`;
