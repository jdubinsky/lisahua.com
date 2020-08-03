import styled from "styled-components";

const MIN_WIDTH = "1000px";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;

  @media only screen and (min-width: ${MIN_WIDTH}) {
    flex-direction: row;
    justify-content: center;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 960px;
`;

export const TitleText = styled.div`
  font-family: Beau;
  font-size: 48px;
  padding-top: 100px;
  padding-bottom: 30px;

  @media only screen and (min-width: ${MIN_WIDTH}) {
    padding-top: 50px;
  }
`;

export const TitleSubText = styled.div`
  font-family: Beau;
  font-size: 20px;
  padding-bottom: 30px;
`;

export const BadgeContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
