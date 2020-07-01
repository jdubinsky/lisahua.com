import { h, Component, Fragment } from "preact";

import GoBackHeader from "../GoBackHeader";
import isMobile from "../../is-mobile";

import * as styles from "./styles";

interface ContentProps {
  width: number;
  widthOffset: number;
  maxWidth: number;
}

export default class PageContent extends Component<ContentProps> {
  getHeader() {
    if (isMobile()) {
      return <Fragment />;
    }

    return <GoBackHeader />;
  }

  render() {
    return (
      <styles.ContentWrapper width={this.props.width} widthOffset={this.props.widthOffset}>
        {this.getHeader()}
        <styles.Content maxWidth={this.props.maxWidth}>{this.props.children}</styles.Content>
      </styles.ContentWrapper>
    );
  }
}
