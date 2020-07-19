import { h, FunctionComponent, VNode } from "preact";

import ArrowlessSmall from "../../icons/ArrowlessSmall";
import Logo from "../../icons/Logo";

import * as styles from "./styles";

type Sections = "about" | "work";

interface SidebarMenuProps {
  selectedSection: Sections;
}

const BACKGROUND_MAP = {
  about: "white",
  work: "",
};

function getMenuItem(section: Sections, selectedSection: Sections): VNode {
  if (section === selectedSection) {
    return (
      <div>
        <a href={`#${section}`}>
          <styles.SelectedMenuItem>{section}</styles.SelectedMenuItem>
          <ArrowlessSmall />
        </a>
      </div>
    );
  }

  return (
    <div>
      <a href={`#${section}`}>
        <styles.MenuItem>{section}</styles.MenuItem>
      </a>
    </div>
  );
}

const SidebarMenu: FunctionComponent<SidebarMenuProps> = ({ selectedSection }): VNode => {
  const background = BACKGROUND_MAP[selectedSection];

  return (
    <styles.SidebarMenu background={background}>
      <styles.LogoWrapper>
        <Logo />
      </styles.LogoWrapper>
      {getMenuItem("about", selectedSection)}
      {getMenuItem("work", selectedSection)}
    </styles.SidebarMenu>
  );
};

export default SidebarMenu;
