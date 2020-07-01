import { h, FunctionComponent, Fragment, VNode } from "preact";

import Footer from "../../components/Footer";
import MaxWidthImage from "../../components/MaxWidthImage";
import SectionHeader from "../../components/SectionHeader";
import PageContent from "../../components/PageContent";
import PageSidebar from "../../components/PageSidebar";
import ParagraphText from "../../components/ParagraphText";
import TextList from "../../components/TextList";

import useMobile from "../../hooks/useMobile";

import * as constants from "./constants";
import * as copy from "./copy";
import * as styles from "./styles";

const EsightCaseStudy: FunctionComponent = (): VNode => {
  const { isCollapsed, onReadMore, getCollapseButton } = useMobile();

  const getProjectInfo = () => {
    const roles = [
      "AA accessibility",
      "information architecture",
      "customer journey mapping",
      "responsive design",
      "visual design",
      "prototyping",
    ];
    return <TextList header="role" listItems={roles} />;
  };

  const getProjectType = () => {
    const projectTypes = ["website"];
    return <TextList header="project type" listItems={projectTypes} />;
  };

  const getTimeline = () => {
    return <TextList header="timeline" listItems={["january - march 2020"]} />;
  };

  const getToolsInfo = () => {
    const tools = ["figma", "whimsical", "aXe", "voiceover", "webAIM", "start colour contrast analyzer"];
    const list = <TextList header="tools" listItems={tools} />;
    return <styles.Column marginBottom="30px">{list}</styles.Column>;
  };

  const getCredits = () => {
    const credits = [
      { name: "yusef dualeh", title: "(product manager)" },
      { name: "joshua van boxtel", title: "(lead developer)" },
      { name: "lisa hua", title: "(user experience designer)" },
    ];

    const creditTexts = credits.map((credit) => {
      return (
        <styles.Text>
          {credit.name}
          <styles.LightText>{credit.title}</styles.LightText>
        </styles.Text>
      );
    });

    return (
      <styles.Column>
        <styles.SubHeader>credits</styles.SubHeader>
        {creditTexts}
      </styles.Column>
    );
  };

  const getSidebarContent = () => {
    if (isCollapsed) {
      return (
        <styles.AvenirText>
          <button onClick={onReadMore}>read more +</button>
        </styles.AvenirText>
      );
    }

    return (
      <Fragment>
        {getProjectInfo()}
        {getProjectType()}
        {getTimeline()}
        {getToolsInfo()}
        {getCredits()}
        {getCollapseButton()}
      </Fragment>
    );
  };

  const getSidebar = () => {
    return (
      <PageSidebar width={32} widthOffset={115} maxWidth="435" minWidth="300" marginRight={45}>
        <styles.Title marginBottom="40px">eSight Eyewear</styles.Title>
        <styles.Text marginBottom="10px">{copy.titleDescription}</styles.Text>
        {getSidebarContent()}
      </PageSidebar>
    );
  };

  const getGoalsSection = () => {
    return (
      <Fragment>
        <SectionHeader title="goals" content={copy.goals} />
      </Fragment>
    );
  };

  const getResearchSection = () => {
    return (
      <Fragment>
        <SectionHeader title="research" content={copy.research} />
        <styles.SmallHeader marginBottom="15px">information architecture</styles.SmallHeader>
        <ParagraphText content={copy.infoArchitecture} />
        <styles.SpacerDiv marginTop="30px" marginBottom="50px">
          <MaxWidthImage imageUrl={constants.infoArchitectureUrl2x} modalImageUrl={constants.infoArchitectureUrl2x} />
        </styles.SpacerDiv>
        <styles.SmallHeader marginBottom="15px">high fidelity designs</styles.SmallHeader>
        <ParagraphText content={copy.highFidelityDesigns} />
        <styles.SpacerDiv marginTop="30px" marginBottom="50px">
          <MaxWidthImage imageUrl={constants.designsUrl2x} modalImageUrl={constants.designsUrl2x} />
        </styles.SpacerDiv>
        <styles.BigLightText marginBottom="30px">{copy.designsImgSubtitle}</styles.BigLightText>
      </Fragment>
    );
  };

  const getResultsSection = () => {
    return (
      <Fragment>
        <SectionHeader title="results" content={copy.results} />
        <styles.SpacerDiv marginBottom="50px">
          <MaxWidthImage
            imageUrl={constants.accessibilityToolsUrl2x}
            modalImageUrl={constants.accessibilityToolsUrl2x}
          />
        </styles.SpacerDiv>
        <styles.BigLightText marginBottom="30px">{copy.resultsImgSubtitle}</styles.BigLightText>
      </Fragment>
    );
  };

  const getContent = () => {
    return (
      <PageContent width={68} widthOffset={115} maxWidth={725}>
        <styles.SpacerDiv marginBottom="50px">
          <MaxWidthImage imageUrl={constants.heroUrl2x} modalImageUrl={constants.heroUrl2x} />
        </styles.SpacerDiv>
        {getGoalsSection()}
        {getResearchSection()}
        {getResultsSection()}
        <Footer />
      </PageContent>
    );
  };

  return (
    <styles.Container>
      {getSidebar()}
      {getContent()}
    </styles.Container>
  );
};

export default EsightCaseStudy;
