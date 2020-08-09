import { h, FunctionComponent, VNode } from "preact";

import Footer from "../../components/Footer";
import ContentSection from "../../components/ContentSection";
import { SectionNode } from "../../components/Section";
import TitleSection from "../../components/TitleSection";
import TitleSubSection from "../../components/TitleSubSection";

import * as constants from "./constants";
import * as copy from "./copy";
import * as styles from "./styles";

const SyrupCaseStudy: FunctionComponent = (): VNode => {
  const getCredits = () => {
    const credits = [
      { name: "graham mcfie", title: "(lead designer)" },
      { name: "lisa hua", title: "(ui/ux designer)" },
      { name: "carlos chacon", title: "(product manager)" },
      { name: "orest hazda", title: "(lead developer)" },
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
    const sections: SectionNode[] = [{ nodeType: "copy", node: copy.context }];

    return <ContentSection title="goals" sections={sections} />;
  };

  const getDesignSprintSection = () => {
    const sections: SectionNode[] = [
      { nodeType: "copy", node: copy.designSprint, customStyle: { paddingBottom: "30px" } },
      { nodeType: "image", node: constants.designSprintUrl2x },
      { nodeType: "caption", node: copy.designSprintCaption },
      { nodeType: "header", node: "insights" },
      { nodeType: "paragraph", node: copy.insightsListOneTitle },
      { nodeType: "bulletList", node: copy.insightsListOne },
      { nodeType: "paragraph", node: copy.insightsListTwoTitle },
      { nodeType: "bulletList", node: copy.insightsListTwo },
    ];

    return <ContentSection title="design sprint" sections={sections} />;
  };

  const getConceptsSection = () => {
    const sections: SectionNode[] = [
      { nodeType: "copy", node: copy.concepts },
      { nodeType: "paragraph", node: copy.conceptsParagraph, customStyle: { paddingBottom: "30px" } },
      { nodeType: "image", node: constants.f2oUrl2x },
      { nodeType: "header", node: "outcomes" },
      { nodeType: "paragraph", node: copy.outcomes },
    ];

    return <ContentSection title="concepts" sections={sections} />;
  };

  const getDesignSection = () => {
    const sections: SectionNode[] = [
      { nodeType: "copy", node: copy.design, customStyle: { paddingBottom: "30px" } },
      { nodeType: "image", node: constants.conceptsUrl2x },
    ];

    return <ContentSection title="designs" sections={sections} />;
  };

  const getResultsSection = () => {
    const sections: SectionNode[] = [{ nodeType: "copy", node: copy.results }];

    return <ContentSection title="results" sections={sections} />;
  };

  const getTitleSubSection = () => {
    const roles = ["design sprint", "brainstorming", "prototyping", "visual designs", "visual QA"];
    const projectTypes = ["web application"];
    const timeline = ["july - december 2019"];
    const tools = ["sketch", "abstract", "invision", "miro", "google forms"];
    const left: SectionNode[] = [
      { nodeType: "smallSection", node: roles, header: "role" },
      { nodeType: "smallSection", node: tools, header: "tools" },
      { nodeType: "smallSection", node: projectTypes, header: "project type" },
      { nodeType: "smallSection", node: timeline, header: "timeline" },
    ];

    const right: SectionNode[] = [{ nodeType: "node", node: getCredits() }];
    return <TitleSubSection leftSections={left} rightSections={right} />;
  };

  return (
    <styles.Container>
      <TitleSection title="SYRUP" titleSubText={copy.titleDescription} heroImgUrl={constants.heroUrl2x} />
      <styles.PaddedContent>
        {getTitleSubSection()}
        {getContextSection()}
        {getDesignSprintSection()}
        {getConceptsSection()}
        {getDesignSection()}
        {getResultsSection()}
        <Footer />
      </styles.PaddedContent>
    </styles.Container>
  );
};

export default SyrupCaseStudy;
