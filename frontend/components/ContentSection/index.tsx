import { h, FunctionComponent, VNode } from "preact";
import Section, { SectionNode } from "../Section";

import * as styles from "./styles";

interface ContentSectionProps {
  title: string;
  sections: SectionNode[];
}

const ContentSection: FunctionComponent<ContentSectionProps> = ({ title, sections }): VNode => {
  return (
    <styles.Container>
      <styles.Title>{title}</styles.Title>
      <Section sections={sections} />
    </styles.Container>
  );
};

export default ContentSection;
