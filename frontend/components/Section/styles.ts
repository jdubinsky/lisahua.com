import styled from "styled-components";

const MIN_WIDTH = "1000px";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  max-width: 700px;
`;

export const Title = styled.div`
  font-family: avenir-roman;
  font-size: 36px;
  font-weight: 800;
  margin-top: 30px;
  margin-bottom: 15px;
`;

export const Text = styled.div`
  font-family: Beau;
  font-size: 20px;
`;

export const Header = styled.div`
  font-family: avenir-roman;
  font-weight: 700;
  font-size: 18px;
  padding-top: 30px;
  padding-bottom: 15px;
`;

export const LightHeader = styled.div`
  font-family: avenir-roman;
  font-size: 16px;
  padding-top: 30px;
  padding-bottom: 10px;
`;

export const Quote = styled.div`
  font-family: avenir-roman;
  font-size: 36px;
  font-weight: 700;
  text-align: center;
  padding-left: 0px;
  padding-right: 0px;

  @media only screen and (min-width: ${MIN_WIDTH}) {
    padding-left: 60px;
    padding-right: 60px;
  }
`;

export const Caption = styled.div`
  font-family: Beau;
  color: #727272;
  font-size: 20px;
  text-align: center;
  margin-top: 10px;
`;

export const Link = styled.a`
  margin-left: 5px;
  text-decoration: underline;
`;
