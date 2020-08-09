import { h, FunctionComponent, VNode } from "preact";

import * as styles from "./styles";

interface ParagraphTextProps {
  content: string;
  fontSize?: number;
  customStyle?: { [key: string]: string };
}

const ParagraphText: FunctionComponent<ParagraphTextProps> = ({ content, fontSize, customStyle }): VNode => {
  const textList = content.split(/\n\n/).map((contentBlock: string) => {
    return (
      <p style={customStyle}>
        <styles.Text fontSize={fontSize}>{contentBlock}</styles.Text>
      </p>
    );
  });

  return <div>{textList}</div>;
};

export default ParagraphText;
