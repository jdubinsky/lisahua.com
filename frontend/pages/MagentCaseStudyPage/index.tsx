import { h, FunctionComponent, Fragment, VNode } from "preact";
import { useEffect, useState } from "preact/hooks";

import BulletList from "../../components/BulletList";
import Footer from "../../components/Footer";
import MaxWidthImage from "../../components/MaxWidthImage";
import PageContent from "../../components/PageContent";
import PageSidebar from "../../components/PageSidebar";
import ParagraphText from "../../components/ParagraphText";
import SectionHeader from "../../components/SectionHeader";
import TextList from "../../components/TextList";

import isMobile from "../../is-mobile";

import * as constants from "./constants";
import * as copy from "./copy";
import * as styles from "./styles";

const MagnentCaseStudyPage: FunctionComponent = (): VNode => {
  const [isCollapsed, setIsCollapsed] = useState(isMobile());

  useEffect(() => {
    if (isCollapsed === true) {
      window.scrollTo(0, 0);
    }
  }, [isCollapsed]);

  const getProjectInfo = () => {
    const roles = [
      "information architecture",
      "user personas",
      "journey mapping",
      "wireframes",
      "stakeholder interviews",
      "user testing",
    ];
    return <TextList header="role" listItems={roles} />;
  };

  const getProjectType = () => {
    const projectTypes = ["marketing", "website"];
    return <TextList header="project type" listItems={projectTypes} />;
  };

  const getTimeline = () => {
    return <TextList header="timeline" listItems={["june - aug 2018"]} />;
  };

  const getToolsInfo = () => {
    const tools = ["sketch", "invision", "highfive", "skype for teams"];
    const list = <TextList header="tools" listItems={tools} />;
    return <styles.Column marginBottom="30px">{list}</styles.Column>;
  };

  const getCredits = () => {
    const credits = [
      { name: "alison ma", title: "(product manager)" },
      { name: "joshua van boxtel", title: "(lead wordpress developer)" },
      { name: "orest hazda", title: "(lead developer)" },
      { name: "rennie chun", title: "(lead visual designer)" },
      { name: "justin damer", title: "(visual designer)" },
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

  const onReadMore = () => {
    setIsCollapsed(false);
  };

  const onCollapse = () => {
    setIsCollapsed(true);
  };

  const getCollapseButton = () => {
    if (!isMobile() || isCollapsed) {
      return <Fragment />;
    }

    return (
      <styles.AvenirText marginTop="30px">
        <button onClick={onCollapse}>collapse -</button>
      </styles.AvenirText>
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
        <styles.Title>Magnet</styles.Title>
        <styles.Title marginBottom="40px">Forensics</styles.Title>
        <styles.Text marginBottom="30px">{copy.description}</styles.Text>
        {getSidebarContent()}
      </PageSidebar>
    );
  };

  const getProjectGoals = () => {
    return (
      <Fragment>
        <styles.SmallHeader marginBottom="15px">project goals</styles.SmallHeader>
        <styles.Text marginBottom="30px">{copy.goals}</styles.Text>
        <BulletList listItems={copy.goalsList} />
        <styles.BlackBackgroundImage>
          <MaxWidthImage imageUrl={constants.magnetWhiteboardUrl2x} modalImageUrl={constants.magnetWhiteboardUrl2x} />
        </styles.BlackBackgroundImage>
        <styles.Text marginTop="30px">{copy.additionalGoals}</styles.Text>
        <BulletList listItems={copy.additionalGoalsList} />
      </Fragment>
    );
  };

  const getContextTable = () => {
    return <SectionHeader title="context" content={copy.context} />;
  };

  const getContextSection = () => {
    return (
      <Fragment>
        {getContextTable()}
        <styles.SmallHeader marginBottom="15px">problem</styles.SmallHeader>
        <styles.Text marginBottom="30px">{copy.problem}</styles.Text>
        <styles.SmallHeader marginBottom="15px">approach</styles.SmallHeader>
        <styles.Text marginBottom="30px">{copy.approach}</styles.Text>
        <styles.SubHeader marginBottom="10px">research</styles.SubHeader>
        <styles.Text marginBottom="30px">{copy.approachResearch}</styles.Text>
        <styles.SubHeader marginBottom="10px">synthesis</styles.SubHeader>
        <styles.Text marginBottom="30px">{copy.synthesis}</styles.Text>
        <styles.SubHeader marginBottom="10px">testing</styles.SubHeader>
        <styles.Text marginBottom="30px">{copy.testing}</styles.Text>
        {getProjectGoals()}
      </Fragment>
    );
  };

  const getCustomerInterviewsSubSection = () => {
    return (
      <Fragment>
        <ParagraphText content={copy.interviews} />
        <BulletList listItems={copy.interviewsList} />
      </Fragment>
    );
  };

  const getResearchSection = () => {
    return (
      <Fragment>
        <SectionHeader title="research" content={copy.research} />
        <styles.SmallHeader>competitive analysis</styles.SmallHeader>
        <ParagraphText content={copy.competitiveAnalysis} />
        <styles.BigQuote marginTop="30px" marginBottom="30px">
          “No one tool is perfect, there's always room for improvement which is why we utilise several tools for
          analysis.”
        </styles.BigQuote>
        <styles.SmallHeader marginBottom="15px">stakeholder interviews</styles.SmallHeader>
        <styles.Text>{copy.stakeholderInterviews}</styles.Text>
        <styles.SpacerDiv marginTop="30px" marginBottom="10px">
          <MaxWidthImage
            imageUrl={constants.magnetStakeholdersUrl2x}
            modalImageUrl={constants.magnetStakeholdersUrl2x}
          />
        </styles.SpacerDiv>
        <styles.BigLightText marginBottom="30px">
          Over the course of two days we conducted in-person interviews with various stakeholders at Magnet Forensics
        </styles.BigLightText>
        {getCustomerInterviewsSubSection()}
        <MaxWidthImage imageUrl={constants.magnetCustomerUrl2x} modalImageUrl={constants.magnetCustomerUrl2x} />
        <styles.BigLightText marginTop="10px">
          Conducting a customer interview with examiners from the UK.
        </styles.BigLightText>
        <styles.SmallHeader marginTop="30px">challenges</styles.SmallHeader>
        <ParagraphText content={copy.challenges} />
      </Fragment>
    );
  };

  const getDefineSection = () => {
    return (
      <styles.SpacerDiv marginTop="50px">
        <SectionHeader title="define" content={copy.define} />
        <styles.SmallHeader marginBottom="30px">personas</styles.SmallHeader>
        <styles.SpacerDiv marginBottom="30px">
          <MaxWidthImage imageUrl={constants.magnetPersonaFE2x} modalImageUrl={constants.magnetPersonaFE2x} />
        </styles.SpacerDiv>
        <styles.Text>{copy.examiner}</styles.Text>
        <styles.SpacerDiv marginTop="45px" marginBottom="25px">
          <MaxWidthImage imageUrl={constants.magnetPersonaPL2x} modalImageUrl={constants.magnetPersonaPL2x} />
        </styles.SpacerDiv>
        <styles.Text>{copy.policeLeader}</styles.Text>
        <styles.Text marginTop="25px">{copy.policeAdvisor}</styles.Text>
        <styles.SpacerDiv marginTop="50px" marginBottom="30px">
          <MaxWidthImage
            imageUrl={constants.magnetPersonaInvestigator2x}
            modalImageUrl={constants.magnetPersonaInvestigator2x}
          />
        </styles.SpacerDiv>
        <styles.Text>{copy.investigator}</styles.Text>
        <styles.SmallHeader marginTop="50px">journey mapping</styles.SmallHeader>
        <styles.Text marginTop="15px">{copy.journeyMapping}</styles.Text>
        <styles.SpacerDiv marginTop="30px">
          <MaxWidthImage imageUrl={constants.magnetJourneyMap2x} modalImageUrl={constants.magnetJourneyMap2x} />
        </styles.SpacerDiv>
      </styles.SpacerDiv>
    );
  };

  const getIdeateSection = () => {
    return (
      <styles.SpacerDiv marginTop="50px">
        <SectionHeader title="ideate" content={copy.ideate} />
        <styles.SmallHeader marginTop="50px">information architecture</styles.SmallHeader>
        <styles.Text marginTop="15px">{copy.infoArch}</styles.Text>
        <styles.SpacerDiv marginTop="30px">
          <MaxWidthImage imageUrl={constants.magnetIA2x} modalImageUrl={constants.magnetIA2x} />
        </styles.SpacerDiv>
        <styles.SmallHeader marginTop="50px">wireframes</styles.SmallHeader>
        <styles.Text marginTop="15px">{copy.wireframes}</styles.Text>
        <styles.SpacerDiv marginTop="20px">
          <MaxWidthImage imageUrl={constants.magnetWireframes2x} modalImageUrl={constants.magnetWireframes2x} />
        </styles.SpacerDiv>
        <styles.SmallHeader marginTop="30px">usability testing</styles.SmallHeader>
        <styles.Text marginTop="15px">{copy.usabilityTesting}</styles.Text>
        <styles.Text marginTop="25px">One concern that was brought up in our testing session:</styles.Text>
        <BulletList listItems={copy.usabilityTestingList} />
        <styles.Text marginTop="25px">{copy.afterUsabilityTesting}</styles.Text>
        <styles.SpacerDiv marginTop="30px">
          <MaxWidthImage imageUrl={constants.magnetUT2x} modalImageUrl={constants.magnetUT2x} />
        </styles.SpacerDiv>
      </styles.SpacerDiv>
    );
  };

  const getRetroSection = () => {
    return (
      <styles.SpacerDiv marginTop="50px">
        <SectionHeader title="retro" content={copy.retro} />
        <styles.SmallHeader marginTop="50px">results</styles.SmallHeader>
        <styles.Text marginTop="25px">
          After the launch of the new website, we observed the following positive outcomes:
        </styles.Text>
        <BulletList listItems={copy.retroList} />
        <styles.SmallHeader marginTop="30px">next steps</styles.SmallHeader>
        <styles.Text marginTop="25px">{copy.nextSteps}</styles.Text>
        <styles.Text marginTop="25px">
          See the live website
          <styles.Link href="https://www.magnetforensics.com/">here</styles.Link>
        </styles.Text>
      </styles.SpacerDiv>
    );
  };

  const getContent = () => {
    return (
      <PageContent width={68} widthOffset={115} maxWidth={725}>
        <styles.SpacerDiv marginBottom="50px">
          <MaxWidthImage imageUrl={constants.magnetHeroUrl2x} modalImageUrl={constants.magnetHeroUrl2x} />
        </styles.SpacerDiv>
        {getContextSection()}
        {getResearchSection()}
        {getDefineSection()}
        {getIdeateSection()}
        {getRetroSection()}
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

export default MagnentCaseStudyPage;
