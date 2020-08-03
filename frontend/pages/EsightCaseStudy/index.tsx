import { h, FunctionComponent, Fragment, VNode } from "preact";

import Footer from "../../components/Footer";
import ContentSection from "../../components/ContentSection";
import { SectionNode } from "../../components/Section";
import TitleSection from "../../components/TitleSection";
import TitleSubSection from "../../components/TitleSubSection";

import * as constants from "./constants";
import * as copy from "./copy";
import * as styles from "./styles";

const EsightCaseStudy: FunctionComponent = (): VNode => {
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

  const getGoalsSection = () => {
    const sections: SectionNode[] = [{ nodeType: "copy", node: copy.goals }];

    return <ContentSection title="goals" sections={sections} />;
  };

  const getResearchSection = () => {
    const sections: SectionNode[] = [
      { nodeType: "copy", node: copy.research },
      { nodeType: "header", node: "information architecture" },
      { nodeType: "paragraph", node: copy.infoArchitecture },
      { nodeType: "image", node: constants.infoArchitectureUrl2x },
      { nodeType: "header", node: "high fidelity designs" },
      { nodeType: "paragraph", node: copy.highFidelityDesigns },
      { nodeType: "image", node: constants.designsUrl2x },
      { nodeType: "caption", node: copy.designsImgSubtitle },
    ];

    return <ContentSection title="research" sections={sections} />;
  };

  const getResultsSection = () => {
    const sections: SectionNode[] = [
      { nodeType: "copy", node: copy.results, customStyle: { paddingBottom: "30px" } },
      { nodeType: "image", node: constants.accessibilityToolsUrl2x },
      { nodeType: "caption", node: copy.resultsImgSubtitle },
    ];

    return <ContentSection title="results" sections={sections} />;
  };

  const getTitleSubSection = () => {
    const roles = [
      "AA accessibility",
      "information architecture",
      "customer journey mapping",
      "responsive design",
      "visual design",
      "prototyping",
    ];
    const tools = ["figma", "whimsical", "aXe", "voiceover", "webAIM", "start colour contrast analyzer"];
    const projectTypes = ["website"];
    const timeline = ["january - march 2020"];
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
      <TitleSection title="eSight Eyewear" titleSubText={copy.titleDescription} heroImgUrl={constants.heroUrl2x} />
      <styles.PaddedContent>
        {getTitleSubSection()}
        {getGoalsSection()}
        {getResearchSection()}
        {getResultsSection()}
        <Footer />
      </styles.PaddedContent>
    </styles.Container>
  );
};

export default EsightCaseStudy;
