import styled from "styled-components";

import { AvenirFontDiv, BeauFontDiv, MarginDiv, MarginA } from "../../text-styles";

const MIN_WIDTH = "1000px";
const MIN_TABLET_WIDTH = "768px";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;

  @media only screen and (min-width: ${MIN_WIDTH}) {
    height: 100%;
  }
`;

export const Content = styled.div`
  display: flex;
  background: ${(props) => props.background};
  padding-left: 30px;
  padding-right: 30px;
  flex-direction: column;
  padding-top: 60px;
  width: 100%;

  @media only screen and (min-width: ${MIN_WIDTH}) {
    max-width: 960px;
    padding-top: 0;
  }
`;

export const Section = styled.div`
  display: flex;

  @media only screen and (min-width: ${MIN_WIDTH}) {
    justify-content: center;
    flex-direction: row;
  }
`;

export const TitleSection = styled(Section)`
  background: white;
  flex-direction: column;
`;

export const ProjectSection = styled(Section)`
  background: #ebe9e4;
  flex-direction: column;
`;

export const ContentRow = styled.div`
  display: flex;
  padding-bottom: 60px;
  flex-direction: column;

  @media only screen and (min-width: ${MIN_WIDTH}) {
    flex-direction: row;
  }
`;

export const RowItem = styled.div`
  display: flex;
  max-width: 420px;

  @media only screen and (min-width: ${MIN_TABLET_WIDTH}) {
    width: 100%;
    max-width: none;
  }
`;

export const SmSpacer = styled.div`
  height: 60px;
  width: 0;

  @media only screen and (min-width: ${MIN_WIDTH}) {
    height: 0;
    width: 50px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 420px;

  @media only screen and (min-width: ${MIN_TABLET_WIDTH}) {
    width: 100%;
    max-width: fit-content;
  }
`;

export const Title = styled(BeauFontDiv)`
  font-size: 48px;
  margin-bottom: 30px;
  margin-top: 50px;

  @media only screen and (min-width: ${MIN_WIDTH}) {
    margin-top: 100px;
    margin-bottom: 60px;
  }
`;

export const Spacer = styled.div`
  height: 60px;
  width: 0;

  @media only screen and (min-width: ${MIN_WIDTH}) {
    height: 0;
    width: 70px;
  }
`;

export const BigSpacer = styled.div`
  width: 200px;
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
  margin-right: 12px;
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
  margin-top: 60px;
`;

export const FooterTitle = styled(SubTitle)`
  margin-bottom: 9px;
`;

export const LinkText = styled.div`
  font-family: Avenir;
  font-weight: 800;
  font-size: 18px;
  color: #21282e;
  margin-top: 30px;
`;

export const Border = styled.div`
  margin: 0 0 60px 0;

  @media only screen and (min-width: ${MIN_WIDTH}) {
    border: 1px solid #21282e;
  }
`;

export const FooterText = styled.div`
  font-family: Beau;
  font-size: 16px;
  color: black;
  max-width: 240px;

  @media only screen and (min-width: ${MIN_WIDTH}) {
    padding-right: 90px;
  }
`;

export const BoldFooterText = styled(FooterText)`
  font-weight: 800;
`;

export const FooterDogsRow = styled(ContentRow)`
  height: 175px;
  flex-direction: column;

  @media only screen and (min-width: ${MIN_TABLET_WIDTH}) {
    padding-bottom: 0;
  }

  @media only screen and (min-width: ${MIN_WIDTH}) {
    flex-direction: row;
  }
`;

export const FooterDogImages = styled.div`
  display: flex;
  flex-direction: row;

  @media only screen and (min-width: ${MIN_TABLET_WIDTH}) {
    justify-content: space-evenly;
    padding-top: 10px;
  }
`;

export const FooterRow = styled(ContentRow)`
  align-items: center;
  padding-top: 50px;

  @media only screen and (min-width: ${MIN_WIDTH}) {
    justify-content: space-between;
  }
`;

export const Footer = styled(Content)`
  width: 100%;
`;

export const BadgeRow = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;

  @media only screen and (min-width: ${MIN_TABLET_WIDTH}) {
    justify-content: flex-end;
  }
`;

export const FooterTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (min-width: ${MIN_WIDTH}) {
    align-items: flex-end;
  }
`;
