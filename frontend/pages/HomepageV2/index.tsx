import { h, FunctionComponent, Fragment, VNode } from "preact";
import { Link } from "react-router-dom";

import ArrowlessIcon from "../../icons/Arrowless";
import ParagraphText from "../../components/ParagraphText";
import ProjectCard from "../../components/ProjectCard";

import * as constants from "./constants";
import * as copy from "./copy";
import * as styles from "./styles";

function getResume() {
  return (
    <styles.ResumeContainer>
      <styles.CallToActionLink href={constants.resumeUrl} marginRight="12px">
        <styles.BoldText>View full resume</styles.BoldText>
      </styles.CallToActionLink>
      <ArrowlessIcon />
    </styles.ResumeContainer>
  );
}

function getExperienceEducationSection() {
  return (
    <Fragment>
      <styles.Header marginTop="30px">experience & education</styles.Header>
      <styles.TextTable>
        <styles.Row>
          <styles.SmallText>Crowdlinker</styles.SmallText>
          <styles.SmallText>2017-2020</styles.SmallText>
        </styles.Row>
        <styles.Row marginTop="6px">
          <styles.SmallText>George Brown</styles.SmallText>
          <styles.SmallText>2016-2017</styles.SmallText>
        </styles.Row>
        <styles.Row marginTop="6px">
          <styles.SmallText>University of Toronto</styles.SmallText>
          <styles.SmallText>2012-2016</styles.SmallText>
        </styles.Row>
      </styles.TextTable>
    </Fragment>
  );
}

function getMenu(background: string) {
  return <styles.SidebarMenu background={background}>about</styles.SidebarMenu>;
}

function getExploreLink(to: string) {
  return (
    <Link to={to}>
      <styles.CallToActionContainer marginTop="30px">
        <styles.CallToActionText>explore case study</styles.CallToActionText>
        <ArrowlessIcon />
      </styles.CallToActionContainer>
    </Link>
  );
}

function getTitleSection() {
  const link = (
    <Link to="/canvass">
      <styles.ExploreButton>
        <styles.ExploreButtonText>explore case study</styles.ExploreButtonText>
      </styles.ExploreButton>
    </Link>
  );

  return (
    <styles.ContentRow>
      {getMenu("white")}
      <styles.Content background="white">
        <styles.Title marginBottom="60px">{copy.title}</styles.Title>
        <styles.ContentRow>
          <styles.Column>
            <ParagraphText content={copy.description} />
            {getExperienceEducationSection()}
            {getResume()}
          </styles.Column>
          <styles.Spacer />
          <styles.FeaturedProjectContainer>
            <ProjectCard
              highlightText="featured project"
              title="Canvass AI"
              content={copy.canvassBlurb}
              link={link}
              imgUrl={constants.canvassUrl2x}
            />
          </styles.FeaturedProjectContainer>
        </styles.ContentRow>
      </styles.Content>
    </styles.ContentRow>
  );
}

function getProjectsSection() {
  const comingSoonLink = <styles.LinkText>🤞 coming soon</styles.LinkText>;

  return (
    <styles.ContentRow>
      <styles.SidebarMenu background="#EBE9E4" />
      <styles.Content background="#EBE9E4">
        <styles.SubTitle>selected projects</styles.SubTitle>
        <styles.ContentRow>
          <ProjectCard
            title="Accessibility Audit"
            content={copy.accessibilityBlurb}
            link={comingSoonLink}
            imgUrl={""}
          />
          <ProjectCard
            title="Magnet Forensics"
            content={copy.magnetBlurb}
            link={getExploreLink("/magnet")}
            imgUrl={constants.magnetUrl2x}
          />
        </styles.ContentRow>
      </styles.Content>
    </styles.ContentRow>
  );
}

const HomepageV2: FunctionComponent = (): VNode => {
  return (
    <styles.Container>
      {getTitleSection()}
      {getProjectsSection()}
    </styles.Container>
  );
};

export default HomepageV2;
