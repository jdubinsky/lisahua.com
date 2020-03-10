import styled from "styled-components";

interface MarginProps {
  marginLeft?: string;
  marginRight?: string;
  marginTop?: string;
}

const MarginDiv = styled.div<MarginProps>`
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
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 10px;
    overflow: auto;
    background: #FFFFFF;
    margin-bottom: 30px;

    @media only screen and (min-width: 768px) {
        width: 35%;
        margin-top: 91px;
        margin-left: 45px;
        margin-right: 49px;
    }
`;

export const Content = styled(MarginDiv)`
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  background: #E5E5E5;

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
  font-weight: 900;
`;

export const BoldText = styled(AvenirFontDiv)`
  font-weight: 800;
  font-size: 18px;
`;

export const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    overflow: hidden;
    height: 100vh;
  }
`;

export const SmallHeader = styled(AvenirFontDiv)`
  font-weight: 900;
  font-size: 18px;
`;

export const SubHeader = styled(AvenirFontDiv)`
  font-size: 16px;
`

export const Table = styled(MarginDiv)`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`;

export const CenteredTable = styled(Table)`
  align-items: center;
`;

export const Column = styled(MarginDiv)`
  width: ${props => props.width || "100%"};
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  flex-direction: column;
`;

export const Text = styled(BeauFontDiv)`
  font-size: 20px;
`;

export const BigText = styled(BeauFontDiv)`
  font-size: 20px;
`;

export const BigQuote = styled(AvenirFontDiv)`
  font-size: 36px;
  font-weight: 900;
  text-align: center;
  padding-left: 60px;
  padding-right: 60px;
`;

export const ImgWrapper = styled.img`
  height: 374px;
  width: 739px;
`;

export const BlackBackgroundImage = styled(MarginDiv)`
  display: flex;
  justify-content: center;
  background-color: black;
`;
