import styled from "styled-components";

interface MarginProps {
  marginLeft?: string;
  marginRight?: string;
  marginTop?: string;
}

export const MarginDiv = styled.div<MarginProps>`
  margin-top: ${props => props.marginTop || "0px"};
  margin-bottom: ${props => props.marginBottom || "0px"};
  margin-left: ${props => props.marginLeft || "0px"};
  margin-right: ${props => props.marginRight || "0px"};
`;

const BeauFontDiv = styled(MarginDiv)`
  font-family: Beau;
  font-style: normal;
  font-weight: normal;
`;

export const AvenirFontDiv = styled(MarginDiv)`
  font-family: Avenir;
  font-style: normal;
  font-weight: normal;
`;

export const SidebarContainer = styled(MarginDiv)`
  width: 100%;
  padding: 10px;
  overflow: auto;
  background: #ffffff;
  margin-bottom: 30px;
  padding-left: 30px;
  padding-right: 30px;

  @media only screen and (min-width: 768px) {
    width: 35%;
    padding-left: 0px;
    padding-right: 0px;
    padding-top: 0px;
    margin-top: 91px;
    margin-left: 45px;
    margin-right: 49px;
    scrollbar-width: none;
    -ms-overflow-style: none;
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const Content = styled(MarginDiv)`
  width: 100%;
  padding: 10px;
  overflow-y: scroll;
  background: #e5e5e5;
  padding-left: 30px;
  padding-right: 30px;

  @media only screen and (min-width: 768px) {
    width: 65%;
    padding-left: 57px;
    padding-top: 37px;
    padding-right: 137px;
    overflow: auto;
  }
`;

export const Title = styled(BeauFontDiv)`
  font-size: 60px;
`;

export const Section = styled(AvenirFontDiv)`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 15px;
`;

export const BoldText = styled(AvenirFontDiv)`
  font-weight: 800;
  font-size: 18px;
`;

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  padding-top: 50px;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    overflow: hidden;
    height: 100vh;
    padding-top: 0px;
  }
`;

export const SmallHeader = styled(AvenirFontDiv)`
  font-weight: 700;
  font-size: 18px;
`;

export const SubHeader = styled(AvenirFontDiv)`
  font-size: 16px;
`;

export const Table = styled(MarginDiv)`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const CenteredTable = styled(MarginDiv)`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const Column = styled(MarginDiv)`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  width: 100%;

  @media only screen and (min-width: 768px) {
    width: ${props => props.width || "100%"};
  }
`;

export const Text = styled(BeauFontDiv)`
  white-space: pre-line;
  font-size: 20px;
`;

export const BigText = styled(BeauFontDiv)`
  white-space: pre-line;
  font-size: 20px;
`;

export const BigQuote = styled(AvenirFontDiv)`
  font-size: 36px;
  font-weight: 700;
  text-align: center;
  padding-left: 30px;
  padding-right: 30px;

  @media only screen and (min-width: 768px) {
    padding-left: 60px;
    padding-right: 60px;
  }
`;

export const MaxWidthImage = styled.img`
  max-width: 100%;
`;

export const CustomerImage = styled(MaxWidthImage)`
  height: 250px;

  @media only screen and (min-width: 768px) {
    height: 350px;
  }
`;

export const ImgWrapper = styled(MaxWidthImage)`
  height: 374px;
  width: 739px;
`;

export const BlackBackgroundImage = styled(MarginDiv)`
  display: flex;
  justify-content: center;
  background-color: black;
`;

export const LightText = styled.span`
  color: #727272;
  margin-left: 5px;
`;

export const BigLightText = styled(BeauFontDiv)`
  color: #727272;
  font-size: 20px;
  text-align: center;
`;

export const BulletList = styled.ul`
  margin-bottom: 30px;
`;

export const ListItem = styled.li`
  font-family: Beau;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  margin-bottom: 15px;
`;

export const Link = styled.a`
  margin-left: 5px;
  text-decoration: underline;
`;

export const Footer = styled(MarginDiv)`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const LeftFooter = styled(AvenirFontDiv)`
  display: flex;
  font-size: 16px;
`;

export const RightFooter = styled(BeauFontDiv)`
  display: flex;
  font-size: 20px;
`;
