import { h, FunctionComponent, Fragment, VNode } from "preact";
import { createRef } from "preact/compat";
import { useEffect, useRef, useState } from "preact/hooks";

import ArrowlessIcon from "../../icons/Arrowless";
import Footer from "../../components/Footer";
import ParagraphText from "../../components/ParagraphText";
import ProjectCard from "../../components/ProjectCard";
import SidebarMenu, { Sections } from "../../components/SidebarMenu";
import StatusBadge from "../../components/StatusBadge";

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

function getExploreLink() {
  return (
    <Fragment>
      <styles.CallToActionContainer marginTop="30px">
        <styles.CallToActionText>explore case study</styles.CallToActionText>
        <ArrowlessIcon />
      </styles.CallToActionContainer>
    </Fragment>
  );
}

function getFooter() {
  return (
    <styles.Section>
      <styles.Footer>
        <styles.FooterTitle>my dogs</styles.FooterTitle>
        <styles.FooterDogsRow>
          <styles.FooterText>{copy.dogs}</styles.FooterText>
          <styles.FooterDogImages>
            <img src={constants.pankoUrl2x} height={175} width={140} />
            <styles.Spacer />
            <img src={constants.tootsieUrl2x} height={175} width={140} />
          </styles.FooterDogImages>
        </styles.FooterDogsRow>
        <styles.FooterRow>
          <Footer />
        </styles.FooterRow>
      </styles.Footer>
    </styles.Section>
  );
}

const aboutSectionRef = createRef<HTMLDivElement>();
const workSectionRef = createRef<HTMLDivElement>();

const HomepageV2: FunctionComponent = (): VNode => {
  const [selectedSection, _setSection] = useState<Sections>(() => "about");
  // TODO: this is awful
  const stateRef = useRef(selectedSection);

  const setSection = (s: Sections) => {
    stateRef.current = s;
    _setSection(s);
  };

  function getTitleSection() {
    const linkButton = (
      <styles.ExploreButton>
        <styles.ExploreButtonText>explore case study</styles.ExploreButtonText>
      </styles.ExploreButton>
    );

    return (
      <styles.TitleSection ref={aboutSectionRef}>
        <SidebarMenu scrollSection={selectedSection} />
        <styles.Content>
          <a name="about" />
          <styles.BadgeRow>
            <StatusBadge status="active" />
          </styles.BadgeRow>
          <styles.Title>{copy.title}</styles.Title>
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
                linkUrl="/canvass"
                linkButton={linkButton}
                imgUrl={constants.canvassUrl2x}
              />
            </styles.FeaturedProjectContainer>
          </styles.ContentRow>
        </styles.Content>
      </styles.TitleSection>
    );
  }

  function getProjectsSection() {
    const comingSoonLink = <styles.LinkText>🤞coming soon</styles.LinkText>;

    return (
      <styles.ProjectSection ref={workSectionRef}>
        <styles.Content background="#ebe9e4">
          <a name="work" />
          <styles.SubTitle>selected projects</styles.SubTitle>
          <styles.ContentRow>
            <styles.RowItem>
              <ProjectCard
                title="Accessibility Audit"
                content={copy.accessibilityBlurb}
                linkButton={comingSoonLink}
                imgUrl={""}
              />
            </styles.RowItem>
            <styles.Spacer />
            <styles.RowItem>
              <styles.SmSpacer />
              <ProjectCard
                title="Magnet Forensics"
                content={copy.magnetBlurb}
                linkButton={getExploreLink()}
                linkUrl={"/magnet"}
                imgUrl={constants.magnetUrl2x}
              />
            </styles.RowItem>
          </styles.ContentRow>
          <styles.Border />
          <styles.ContentRow>
            <styles.RowItem>
              <ProjectCard
                title="eSight Eyewear"
                content={copy.esightBlurb}
                linkButton={getExploreLink()}
                linkUrl="/esight"
                imgUrl={constants.esightUrl2x}
              />
            </styles.RowItem>
            <styles.Spacer />
            <styles.RowItem>
              <styles.SmSpacer />
              <ProjectCard
                title="OnCall Health"
                content={copy.oncallBlurb}
                linkButton={getExploreLink()}
                linkUrl="oncall"
                imgUrl={constants.oncallUrl2x}
              />
            </styles.RowItem>
          </styles.ContentRow>
        </styles.Content>
      </styles.ProjectSection>
    );
  }

  const checkSection = () => {
    const aboutSection = aboutSectionRef.current;
    if (!aboutSection) {
      return;
    }

    const bottom = aboutSection.getBoundingClientRect().bottom;

    const section = stateRef.current;
    if (!section) {
      return;
    }

    if (bottom > 5 && section !== "about") {
      setSection("about");
      return;
    } else if (bottom > 5 && section === "about") {
      return;
    }

    const workSection = workSectionRef.current;
    if (!workSection) {
      return;
    }

    const workSectionBottom = workSection.getBoundingClientRect().bottom;
    if (workSectionBottom > 5 && section !== "work") {
      setSection("work");
      return;
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", checkSection);
    return () => document.removeEventListener("scroll", checkSection);
  }, []);

  return (
    <styles.Container>
      {getTitleSection()}
      {getProjectsSection()}
      {getFooter()}
    </styles.Container>
  );
};

export default HomepageV2;
