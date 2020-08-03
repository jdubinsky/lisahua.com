import { h, FunctionComponent, Fragment, VNode } from "preact";

import Footer from "../../components/Footer";
import ContentSection from "../../components/ContentSection";
import { SectionNode } from "../../components/Section";
import TitleSection from "../../components/TitleSection";
import TitleSubSection from "../../components/TitleSubSection";

import * as constants from "./constants";
import * as copy from "./copy";
import * as styles from "./styles";

const OnCallCaseStudy: FunctionComponent = (): VNode => {
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

  const getContextSection = () => {
    const sections: SectionNode[] = [
      { nodeType: "paragraph", node: copy.context, customStyle: { paddingBottom: "30px" } },
      { nodeType: "image", node: constants.reinventUrl2x },
    ];

    return <ContentSection title="context" sections={sections} />;
  };

  const getResultsSection = () => {
    const sections: SectionNode[] = [{ nodeType: "paragraph", node: copy.results }];

    return <ContentSection title="results" sections={sections} />;
  };

  const getTitleSubSection = () => {
    const roles = ["visual design", "high fidelity mockup", "prototyping"];
    const tools = ["figma"];
    const projectTypes = ["website"];
    const timeline = ["february 2020"];
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
      <TitleSection title="OnCall" titleSubText={copy.titleDescription} heroImgUrl={constants.heroUrl2x} />
      <styles.PaddedContent>
        {getTitleSubSection()}
        {getContextSection()}
        {getResultsSection()}
        <Footer />
      </styles.PaddedContent>
    </styles.Container>
  );
};

export default OnCallCaseStudy;
