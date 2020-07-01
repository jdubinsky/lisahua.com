import { h, Component } from "preact";

import * as styles from "./styles";

interface SidebarProps {
  width: number;
  widthOffset: number;
  minWidth: string;
  maxWidth: string;
  marginRight?: number;
}

export default class PageSidebar extends Component<SidebarProps> {
  static defaultProps = {
    marginRight: 90,
  };

  render() {
    return (
      <styles.SidebarWrapper width={this.props.width} widthOffset={this.props.widthOffset}>
        <styles.Sidebar
          minWidth={this.props.minWidth}
          maxWidth={this.props.maxWidth}
          marginRight={this.props.marginRight}
        >
          {this.props.children}
        </styles.Sidebar>
      </styles.SidebarWrapper>
    );
  }
}
