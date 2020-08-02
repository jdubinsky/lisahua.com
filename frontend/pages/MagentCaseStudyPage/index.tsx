import { h, FunctionComponent, Fragment, VNode } from "preact";

import BulletList from "../../components/BulletList";
import Footer from "../../components/Footer";
import MaxWidthImage from "../../components/MaxWidthImage";
import ParagraphText from "../../components/ParagraphText";
import Section, { SectionNode } from "../../components/Section";
import SmallSection from "../../components/SmallSection";
import TitleSection from "../../components/TitleSection";

import * as constants from "./constants";
import * as copy from "./copy";
import * as styles from "./styles";

const MagnentCaseStudyPage: FunctionComponent = (): VNode => {
  const getProjectInfo = () => {
    const roles = [
      "information architecture",
      "user personas",
      "journey mapping",
      "wireframes",
      "stakeholder interviews",
      "user testing",
    ];
    return <SmallSection header="role" textItems={roles} />;
  };

  const getProjectType = () => {
    const projectTypes = ["marketing", "website"];
    return <SmallSection header="project type" textItems={projectTypes} />;
  };

  const getTimeline = () => {
    return <SmallSection header="timeline" textItems={["june - aug 2018"]} />;
  };

  const getToolsInfo = () => {
    const tools = ["sketch", "invision", "highfive", "skype for teams"];
    return <SmallSection header="tools" textItems={tools} />;
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

  const getProjectGoals = () => {
    return (
      <Fragment>
        <styles.SmallHeader marginBottom="15px">project goals</styles.SmallHeader>
        <styles.Text marginBottom="30px">{copy.goals}</styles.Text>
        <BulletList listItems={copy.goalsList} />
        <MaxWidthImage imageUrl={constants.magnetWhiteboardUrl2x} modalImageUrl={constants.magnetWhiteboardUrl2x} />
        <styles.Text marginTop="30px">{copy.additionalGoals}</styles.Text>
        <BulletList listItems={copy.additionalGoalsList} />
      </Fragment>
    );
  };

  const getContextSection = () => {
    const contextSections: SectionNode[] = [
      { nodeType: "copy", node: copy.context },
      { nodeType: "header", node: "problem" },
      { nodeType: "copy", node: copy.problem },
      { nodeType: "header", node: "approach" },
      { nodeType: "copy", node: copy.approach },
      { nodeType: "lightHeader", node: "research" },
      { nodeType: "copy", node: copy.approachResearch },
      { nodeType: "lightHeader", node: "synthesis" },
      { nodeType: "copy", node: copy.synthesis },
      { nodeType: "lightHeader", node: "testing" },
      { nodeType: "copy", node: copy.testing },
      { nodeType: "header", node: "project goals" },
      { nodeType: "copy", node: copy.goals },
      { nodeType: "bulletList", node: copy.goalsList },
      { nodeType: "image", node: constants.magnetWhiteboardUrl2x },
      { nodeType: "copy", node: copy.additionalGoals, customStyle: { paddingTop: "30px" } },
      { nodeType: "bulletList", node: copy.additionalGoalsList },
    ];

    return <Section title="context" sections={contextSections} />;
    // return (
    //   <styles.Section>
    //     <styles.SectionTitle>context</styles.SectionTitle>
    //     <styles.Text marginBottom="30px">{copy.context}</styles.Text>
    //     <styles.SmallHeader marginBottom="15px">problem</styles.SmallHeader>
    //     <styles.Text marginBottom="30px">{copy.problem}</styles.Text>
    //     <styles.SmallHeader marginBottom="15px">approach</styles.SmallHeader>
    //     <styles.Text marginBottom="30px">{copy.approach}</styles.Text>
    //     <styles.SubHeader marginBottom="10px">research</styles.SubHeader>
    //     <styles.Text marginBottom="30px">{copy.approachResearch}</styles.Text>
    //     <styles.SubHeader marginBottom="10px">synthesis</styles.SubHeader>
    //     <styles.Text marginBottom="30px">{copy.synthesis}</styles.Text>
    //     <styles.SubHeader marginBottom="10px">testing</styles.SubHeader>
    //     <styles.Text marginBottom="30px">{copy.testing}</styles.Text>
    //     {getProjectGoals()}
    //   </styles.Section>
    // );
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
    const sections: SectionNode[] = [
      { nodeType: "copy", node: copy.research },
      { nodeType: "header", node: "competitive analysis" },
      { nodeType: "paragraph", node: copy.competitiveAnalysis },
      { nodeType: "quote", node: copy.toolQuote },
      { nodeType: "header", node: "stakeholder interviews" },
      { nodeType: "copy", node: copy.stakeholderInterviews },
      { nodeType: "image", node: constants.magnetStakeholdersUrl2x },
      { nodeType: "caption", node: copy.stakeholderCaption },
      { nodeType: "paragraph", node: copy.interviews },
      { nodeType: "bulletList", node: copy.interviewsList },
      { nodeType: "image", node: constants.magnetCustomerUrl2x },
      { nodeType: "caption", node: copy.customerCaption },
      { nodeType: "header", node: "challenges" },
      { nodeType: "paragraph", node: copy.challenges },
    ];

    return <Section title="research" sections={sections} />;

    return (
      <styles.Section>
        <styles.SectionTitle>research</styles.SectionTitle>
        <styles.Text marginBottom="30px">{copy.research}</styles.Text>
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
      </styles.Section>
    );
  };

  const getDefineSection = () => {
    const sections: SectionNode[] = [
      { nodeType: "copy", node: copy.define },
      { nodeType: "header", node: "personas" },
      { nodeType: "image", node: constants.magnetPersonaFE2x },
      { nodeType: "copy", node: copy.examiner, customStyle: { paddingTop: "30px", paddingBottom: "30px" } },
      { nodeType: "image", node: constants.magnetPersonaPL2x },
      { nodeType: "paragraph", node: copy.policeLeader },
      { nodeType: "paragraph", node: copy.policeAdvisor },
      { nodeType: "image", node: constants.magnetPersonaInvestigator2x },
      { nodeType: "copy", node: copy.investigator, customStyle: { paddingTop: "30px", paddingBottom: "30px" } },
      { nodeType: "header", node: "journey mapping" },
      { nodeType: "copy", node: copy.journeyMapping, customStyle: { paddingBottom: "30px" } },
      { nodeType: "image", node: constants.magnetJourneyMap2x },
    ];

    return <Section title="define" sections={sections} />;
    return (
      <styles.Section>
        <styles.SectionTitle>define</styles.SectionTitle>
        <styles.Text>{copy.define}</styles.Text>
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
      </styles.Section>
    );
  };

  const getIdeateSection = () => {
    const sections: SectionNode[] = [
      { nodeType: "copy", node: copy.ideate },
      { nodeType: "header", node: "information architecture" },
      { nodeType: "copy", node: copy.infoArch, customStyle: { paddingBottom: "30px" } },
      { nodeType: "image", node: constants.magnetIA2x },
      { nodeType: "header", node: "wireframes" },
      { nodeType: "copy", node: copy.wireframes, customStyle: { paddingBottom: "30px" } },
      { nodeType: "image", node: constants.magnetWireframes2x },
      { nodeType: "header", node: "usability testing" },
      { nodeType: "copy", node: copy.usabilityTesting },
      { nodeType: "copy", node: copy.concern },
      { nodeType: "bulletList", node: copy.usabilityTestingList },
      { nodeType: "copy", node: copy.afterUsabilityTesting, customStyle: { paddingBottom: "30px" } },
      { nodeType: "image", node: constants.magnetUT2x },
    ];

    return <Section title="ideate" sections={sections} />;

    return (
      <styles.Section>
        <styles.SectionTitle>ideate</styles.SectionTitle>
        <styles.Text marginTop="15px">{copy.ideate}</styles.Text>
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
      </styles.Section>
    );
  };

  const getLiveLink = () => {
    return (
      <styles.Text marginTop="25px">
        See the live website
        <styles.Link href="https://www.magnetforensics.com/">here</styles.Link>
      </styles.Text>
    );
  };

  const getRetroSection = () => {
    const sections: SectionNode[] = [
      { nodeType: "copy", node: copy.retro },
      { nodeType: "header", node: "results" },
      { nodeType: "copy", node: copy.outcomes },
      { nodeType: "bulletList", node: copy.retroList },
      { nodeType: "header", node: "next steps" },
      { nodeType: "copy", node: copy.nextSteps },
      { nodeType: "node", node: getLiveLink() },
    ];

    return <Section title="retro" sections={sections} />;

    return (
      <styles.Section>
        <styles.SectionTitle>retro</styles.SectionTitle>
        <styles.Text marginTop="15px">{copy.retro}</styles.Text>
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
      </styles.Section>
    );
  };

  return (
    <styles.Container>
      <TitleSection title="Magnet Forensics" titleSubText={copy.titleSubText} heroImgUrl={constants.magnetHeroUrl2x} />
      <styles.TitleSubSection>
        <div>
          {getProjectInfo()}
          {getToolsInfo()}
          {getProjectType()}
          {getTimeline()}
        </div>
        {getCredits()}
      </styles.TitleSubSection>
      {getContextSection()}
      {getResearchSection()}
      {getDefineSection()}
      {getIdeateSection()}
      {getRetroSection()}
      <Footer />
    </styles.Container>
  );
};

export default MagnentCaseStudyPage;
