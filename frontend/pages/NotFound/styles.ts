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
    justify-content: flex-start;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 960px;
  max-height: 1024px;
  padding-top: 100px;
  width: 100%;
  height: 100%;

  @media only screen and (min-width: ${MIN_WIDTH}) {
    padding-left: 285px;
  }
`;

export const BigText = styled.div`
  font-family: Roboto;
  font-weight: 900;
  font-size: 108px;
`;

export const SubText = styled.div`
  font-family: Roboto;
  font-size: 18px;
`;

export const BackToAllContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  padding-top: 60px;
`;

export const BoldText = styled.div`
  font-family: avenir-roman;
  font-weight: 800;
  font-size: 18px;
  margin-right: 12px;
`;

export const StatusBadgeContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
