import styled from "styled-components";

export const Sidebar = styled.div`
  height: 100%;
  width: 35%;
  display: flex;
  flex-direction: column;
  overflow: auto;
  left: 0px;
  top: 0px;
  margin-left: 54px;
  margin-top: 65px;
  margin-right: 60px;
  background: #FFFFFF;
`;

const BeauFontDiv = styled.div`
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

export const TextTable = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
`;

export const Row = styled.div`
  margin-top: ${(props: { marginTop?: string }) => props.marginTop || "0px"};
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  flex-direction: row;
`;

export const AvenirFontDiv = styled.div`
  font-family: Avenir;
  font-style: normal;
  font-weight: normal;
`;

export const Header = styled(AvenirFontDiv)`
  margin-top: ${(props: { marginTop?: string }) => props.marginTop || "0px"};
  font-size: 16px;
`;

export const Subtext = styled(AvenirFontDiv)`
  margin-top: 30px;
  font-size: 16px;
`;

export const BoldText = styled(AvenirFontDiv)`
  margin-top: ${(props: { marginTop?: string }) => props.marginTop || "0px"};
  font-weight: 800;
  font-size: 18px;
`;
