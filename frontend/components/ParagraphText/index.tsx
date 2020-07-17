import { h, FunctionComponent, VNode } from "preact";

import * as styles from "./styles";

interface ParagraphTextProps {
  content: string;
  fontSize?: number;
}

const ParagraphText: FunctionComponent<ParagraphTextProps> = ({ content, fontSize }): VNode => {
  const textList = content.split(/\n\n/).map((contentBlock: string) => {
    return (
      <p>
        <styles.Text fontSize={fontSize}>{contentBlock}</styles.Text>
      </p>
    );
  });

  return <div>{textList}</div>;
};

export default ParagraphText;
