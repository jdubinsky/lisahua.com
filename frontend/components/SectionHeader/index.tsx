import { h, Component } from "preact";

import ParagraphText from "../ParagraphText";

import * as styles from "./styles";

interface SectionHeaderProps {
  title: string;
  content: string;
  titleWidthPercent: number;
  contentWidthPercent: number;
}

export default class SectionHeader extends Component<SectionHeaderProps> {
  static defaultProps = {
    titleWidthPercent: 25,
    contentWidthPercent: 75,
  };

  render() {
    const { titleWidthPercent, contentWidthPercent } = this.props;
    const titlePercent = `${titleWidthPercent}%`;
    const contentPercent = `${contentWidthPercent}%`;

    return (
      <styles.Table marginBottom="50px">
        <styles.Column width={titlePercent}>
          <styles.Section>{this.props.title}</styles.Section>
        </styles.Column>
        <styles.Column width={contentPercent}>
          <ParagraphText content={this.props.content} />
        </styles.Column>
      </styles.Table>
    );
  }
}
