import styled from "styled-components";

import { AvenirFontDiv, BeauFontDiv, MarginDiv, MarginA } from "../../text-styles";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    height: 100vh;
  }
`;

export const Sidebar = styled.div`
  background: ${(props) => props.background};
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    min-width: 100px;
    max-width: 287px;
    padding-top: 37px;
    padding-left: 35px;
  }
`;

export const Content = styled.div`
  background: ${(props) => props.background};
  padding-left: 30px;
  padding-right: 30px;
  width: 100%;

  @media only screen and (min-width: 768px) {
    max-width: 960px;
    padding-left: 58px;
    padding-top: 37px;
    padding-right: 137px;
  }
`;

export const Section = styled.div`
  display: flex;
`;

export const TitleSection = styled(Section)`
  background: white;
`;

export const ProjectSection = styled(Section)`
  background: #ebe9e4;
`;

export const ContentRow = styled.div`
  display: flex;
  padding-bottom: 60px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 420px;
`;

export const Title = styled(BeauFontDiv)`
  font-size: 48px;
`;

export const Spacer = styled.div`
  width: 70px;
`;

export const FeaturedProjectContainer = styled.div`
  padding: 33px 50px;
  background: #ebe9e4;
`;

export const ExploreButton = styled.div`
  padding: 15px 25px;
  background: #21282e;
  border-radius: 130px;
  max-width: 150px;
`;

export const ExploreButtonText = styled.div`
  font-family: Avenir;
  font-size: 16px;
  color: white;
`;

export const SmallText = styled(BeauFontDiv)`
  font-size: 20px;
`;

export const TextTable = styled(MarginDiv)``;

export const Row = styled(MarginDiv)`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  flex-direction: row;
`;

export const Header = styled(AvenirFontDiv)`
  font-size: 16px;
`;

export const ResumeContainer = styled(MarginDiv)`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 30px;
`;

export const CallToActionContainer = styled(MarginDiv)`
  display: flex;
  align-items: center;
  margin-bottom: 45px;

  @media only screen and (min-width: 768px) {
    margin-bottom: 0px;
  }
`;

export const CallToActionText = styled(AvenirFontDiv)`
  font-weight: 800;
  font-size: 18px;
`;

export const CallToActionLink = styled(MarginA)``;

export const BoldText = styled(AvenirFontDiv)`
  font-weight: 800;
  font-size: 18px;
`;

export const SubTitle = styled.div`
  font-family: Avenir;
  font-weight: 800;
  font-size: 36px;
  color: #21282e;
  margin-bottom: 60px;
`;

export const LinkText = styled.div`
  font-family: Avenir;
  font-weight: 800;
  font-size: 18px;
  color: #21282e;
  margin-top: 30px;
`;
