import styled from "styled-components";

interface MarginProps {
  marginLeft?: string;
  marginRight?: string;
  marginTop?: string;
}

const MarginDiv = styled.div<MarginProps>`
  margin-top: ${props => props.marginTop || "0px"};
  margin-left: ${props => props.marginLeft || "0px"};
  margin-right: ${props => props.marginRight || "0px"};
`;

export const Sidebar = styled(MarginDiv)`
  height: 100%;
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  overflow: auto;
  background: #FFFFFF;

  @media only screen and (min-width: 768px) {
    width: 35%;
    left: 0px;
    top: 0px;
    margin-top: 65px;
    margin-left: 54px;
    margin-right: 60px;
    overflow: auto;
  }
`;

const BeauFontDiv = styled(MarginDiv)`
  font-family: Beau;
  font-style: normal;
  font-weight: normal;
`;

export const Title = styled(BeauFontDiv)`
  font-size: 105px;
`;

export const Subtitle = styled(BeauFontDiv)`
  font-size: 60px;
`;

export const Text = styled(BeauFontDiv)`
  margin-top: 30px;
  font-size: 24px;
`;

export const SmallText = styled(BeauFontDiv)`
  font-size: 20px;
`;

export const TextTable = styled(MarginDiv)`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
`;

export const Row = styled(MarginDiv)`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  flex-direction: row;
`;

export const AvenirFontDiv = styled(MarginDiv)`
  font-family: Avenir;
  font-style: normal;
  font-weight: normal;
`;

export const Header = styled(AvenirFontDiv)`
  font-size: 16px;
`;

export const TextWithIcon = styled(MarginDiv)`
  display: flex;
  align-items: center;
`;

export const Subtext = styled(AvenirFontDiv)`
  font-size: 16px;
`;

export const BoldText = styled(AvenirFontDiv)`
  font-weight: 800;
  font-size: 18px;
`;
