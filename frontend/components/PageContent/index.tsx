import { h, Component } from "preact";

import * as styles from "./styles";

interface ContentProps {
  width: number;
  widthOffset: number;
  maxWidth: number;
}

export default class PageContent extends Component<ContentProps> {
  render() {
    return (
      <styles.ContentWrapper
        width={this.props.width}
        widthOffset={this.props.widthOffset}
      >
        <styles.Content maxWidth={this.props.maxWidth}>
          {this.props.children}
        </styles.Content>
      </styles.ContentWrapper>
    );
  }
}
