import { h, Component } from "preact";

import * as styles from "./styles";

interface SidebarProps {
  width: string;
  widthOffset: string;
  minWidth: string;
  maxWidth: string;
}

export default class PageSidebar extends Component<SidebarProps> {
  render() {
    return (
      <styles.SidebarWrapper
        width={this.props.width}
        widthOffset={this.props.widthOffset}
      >
        <styles.Sidebar
          minWidth={this.props.minWidth}
          maxWidth={this.props.maxWidth}
        >
          {this.props.children}
        </styles.Sidebar>
      </styles.SidebarWrapper>
    );
  }
}
