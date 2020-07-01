import { h, FunctionComponent, Fragment, VNode } from "preact";

import Footer from "../../components/Footer";
import MaxWidthImage from "../../components/MaxWidthImage";
import SectionHeader from "../../components/SectionHeader";
import PageContent from "../../components/PageContent";
import PageSidebar from "../../components/PageSidebar";
import TextList from "../../components/TextList";

import useMobile from "../../hooks/useMobile";

import * as constants from "./constants";
import * as copy from "./copy";
import * as styles from "./styles";

const OnCallCaseStudy: FunctionComponent = (): VNode => {
  const { isCollapsed, onReadMore, getCollapseButton } = useMobile();

  const getProjectInfo = () => {
    const roles = ["visual design", "high fidelity mockup", "prototyping"];
    return <TextList header="role" listItems={roles} />;
  };

  const getProjectType = () => {
    const projectTypes = ["website"];
    return <TextList header="project type" listItems={projectTypes} />;
  };

  const getTimeline = () => {
    return <TextList header="timeline" listItems={["february 2020"]} />;
  };

  const getToolsInfo = () => {
    const tools = ["figma"];
    const list = <TextList header="tools" listItems={tools} />;
    return <styles.Column marginBottom="30px">{list}</styles.Column>;
  };

  const getCredits = () => {
    const credits = [
      { name: "alison ma", title: "(product manager)" },
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
      <PageSidebar width={32} widthOffset={115} maxWidth="375" minWidth="300">
        <styles.Title marginBottom="40px">OnCall</styles.Title>
        <styles.Text marginBottom="10px">{copy.titleDescription}</styles.Text>
        {getSidebarContent()}
      </PageSidebar>
    );
  };

  const getContextSection = () => {
    return (
      <Fragment>
        <SectionHeader title="context" content={copy.context} />
        <styles.SpacerDiv marginTop="30px" marginBottom="50px">
          <MaxWidthImage imageUrl={constants.reinventUrl2x} />
        </styles.SpacerDiv>
      </Fragment>
    );
  };

  const getResultsSection = () => {
    return (
      <Fragment>
        <SectionHeader title="results" content={copy.results} />
      </Fragment>
    );
  };

  const getContent = () => {
    return (
      <PageContent width={68} widthOffset={115} maxWidth={725}>
        <styles.SpacerDiv marginBottom="50px">
          <MaxWidthImage imageUrl={constants.heroUrl2x} modalImageUrl={constants.heroUrl2x} />
        </styles.SpacerDiv>
        {getContextSection()}
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

export default OnCallCaseStudy;
