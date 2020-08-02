import { h, FunctionComponent, VNode } from "preact";

import * as styles from "./styles";

interface SmallSectionProps {
  header: string;
  textItems: string[];
}

const SmallSection: FunctionComponent<SmallSectionProps> = ({ header, textItems }): VNode => {
  const text = textItems.join(", ");
  return (
    <styles.Container>
      <styles.Header>{header}</styles.Header>
      <styles.Text>{text}</styles.Text>
    </styles.Container>
  );
};

export default SmallSection;
