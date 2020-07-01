import { h, Component } from "preact";

import * as styles from "./styles";

interface ParagraphTextProps {
  content: string;
  fontSize?: number;
}

export default class ParagraphText extends Component<ParagraphTextProps> {
  render() {
    const { content, fontSize } = this.props;
    return content.split(/\n\n/).map((contentBlock: string) => {
      return (
        <p>
          <styles.Text fontSize={fontSize}>{contentBlock}</styles.Text>
        </p>
      );
    });
  }
}
