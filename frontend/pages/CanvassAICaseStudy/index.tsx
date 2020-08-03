import { h, FunctionComponent, VNode } from "preact";

import Footer from "../../components/Footer";
import ContentSection from "../../components/ContentSection";
import { SectionNode } from "../../components/Section";
import TitleSection from "../../components/TitleSection";
import TitleSubSection from "../../components/TitleSubSection";

import * as constants from "./constants";
import * as copy from "./copy";
import * as styles from "./styles";

const CanvassAICaseStudyPage: FunctionComponent = (): VNode => {
  const getCredits = () => {
    const credits = [
      { name: "courtney zorio", title: "(project manager)" },
      { name: "rennie chun", title: "(lead visual designer)" },
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
    const sections: SectionNode[] = [
      { nodeType: "copy", node: copy.context, customStyle: { paddingBottom: "30px" } },
      { nodeType: "image", node: constants.oldWebAppUrl2x },
      { nodeType: "caption", node: copy.demoCaption },
    ];

    return <ContentSection title="context" sections={sections} />;
  };

  const getHighlightsSection = () => {
    const sections: SectionNode[] = [
      { nodeType: "copy", node: copy.highlights },
      { nodeType: "header", node: "wireframes" },
      { nodeType: "copy", node: copy.wireframes, customStyle: { paddingBottom: "30px" } },
      { nodeType: "image", node: constants.wireframesUrl2x },
      { nodeType: "header", node: "user flow" },
      { nodeType: "copy", node: copy.userFlow, customStyle: { paddingBottom: "30px" } },
      { nodeType: "image", node: constants.userFlowUrl2x },
      { nodeType: "caption", node: "Canvass AI's userflow" },
      { nodeType: "header", node: "high fidelity designs" },
      { nodeType: "copy", node: copy.highFidelityPartOne, customStyle: { paddingBottom: "30px" } },
      { nodeType: "image", node: constants.moodboardUrl2x },
      { nodeType: "caption", node: copy.moodboardCaption },
      { nodeType: "copy", node: copy.highFidelityPartTwo, customStyle: { paddingBottom: "30px", paddingTop: "30px" } },
      { nodeType: "image", node: constants.tableComparisonUrl2x },
      { nodeType: "caption", node: copy.tableCaption },
    ];

    return <ContentSection title="highlights" sections={sections} />;
  };

  const getResultsSection = () => {
    const sections: SectionNode[] = [{ nodeType: "copy", node: copy.results }];

    return <ContentSection title="results" sections={sections} />;
  };

  const getTitleSubSection = () => {
    const roles = ["user flow", "wireframes", "visual designs"];
    const projectTypes = ["web application"];
    const tools = ["sketch", "invision", "anima app"];
    const left: SectionNode[] = [
      { nodeType: "smallSection", node: roles, header: "role" },
      { nodeType: "smallSection", node: tools, header: "tools" },
      { nodeType: "smallSection", node: projectTypes, header: "project type" },
      { nodeType: "smallSection", node: ["dec 2017 - feb 2018"], header: "timeline" },
    ];

    const right: SectionNode[] = [{ nodeType: "node", node: getCredits() }];

    return <TitleSubSection leftSections={left} rightSections={right} />;
  };

  return (
    <styles.Container>
      <TitleSection title="Canvass AI" titleSubText={copy.titleDescription} heroImgUrl={constants.heroUrl2x} />
      {getTitleSubSection()}
      {getContextSection()}
      {getHighlightsSection()}
      {getResultsSection()}
      <Footer />
    </styles.Container>
  );
};

export default CanvassAICaseStudyPage;
