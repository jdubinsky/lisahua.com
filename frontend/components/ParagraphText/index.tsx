import { h, Component } from "preact";

import * as styles from "./styles";

interface ParagraphTextProps {
  content: string;
}

export default class ParagraphText extends Component<ParagraphTextProps> {
  render() {
    const { content } = this.props;
    return content.split(/\n\n/).map((contentBlock: string) => {
      return (
        <p>
          <styles.Text>{contentBlock}</styles.Text>
        </p>
      );
    });
  }
}
