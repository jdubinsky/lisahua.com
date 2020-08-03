import { h, FunctionComponent, VNode } from "preact";

import Footer from "../../components/Footer";
import ContentSection from "../../components/ContentSection";
import { SectionNode } from "../../components/Section";
import TitleSection from "../../components/TitleSection";
import TitleSubSection from "../../components/TitleSubSection";

import * as constants from "./constants";
import * as copy from "./copy";
import * as styles from "./styles";

const MagnentCaseStudyPage: FunctionComponent = (): VNode => {
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

    return <ContentSection title="context" sections={contextSections} />;
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

    return <ContentSection title="research" sections={sections} />;
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

    return <ContentSection title="define" sections={sections} />;
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

    return <ContentSection title="ideate" sections={sections} />;
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

    return <ContentSection title="retro" sections={sections} />;
  };

  const getTitleSubSection = () => {
    const roles = [
      "information architecture",
      "user personas",
      "journey mapping",
      "wireframes",
      "stakeholder interviews",
      "user testing",
    ];
    const tools = ["sketch", "invision", "highfive", "skype for teams"];
    const projectTypes = ["marketing", "website"];
    const left: SectionNode[] = [
      { nodeType: "smallSection", node: roles, header: "role" },
      { nodeType: "smallSection", node: tools, header: "tools" },
      { nodeType: "smallSection", node: projectTypes, header: "project type" },
      { nodeType: "smallSection", node: ["june - aug 2018"], header: "timeline" },
    ];

    const right: SectionNode[] = [{ nodeType: "node", node: getCredits() }];

    return <TitleSubSection leftSections={left} rightSections={right} />;
  };

  return (
    <styles.Container>
      <TitleSection title="Magnet Forensics" titleSubText={copy.titleSubText} heroImgUrl={constants.magnetHeroUrl2x} />
      <styles.PaddedContent>
        {getTitleSubSection()}
        {getContextSection()}
        {getResearchSection()}
        {getDefineSection()}
        {getIdeateSection()}
        {getRetroSection()}
        <Footer />
      </styles.PaddedContent>
    </styles.Container>
  );
};

export default MagnentCaseStudyPage;
