import { h, FunctionComponent, VNode } from "preact";

import * as styles from "./styles";
import Section, { SectionNode } from "../Section";

interface TitleSubSectionProps {
  leftSections: SectionNode[];
  rightSections: SectionNode[];
}

const TitleSubSection: FunctionComponent<TitleSubSectionProps> = ({ leftSections, rightSections }): VNode => {
  return (
    <styles.TitleSubSection>
      <styles.LeftColumn>
        <Section sections={leftSections} />
      </styles.LeftColumn>
      <styles.RightColumn>
        <Section sections={rightSections} />
      </styles.RightColumn>
    </styles.TitleSubSection>
  );
};

export default TitleSubSection;
