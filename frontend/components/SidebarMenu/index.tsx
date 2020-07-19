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
      <a href={`#${section}`}>
        <styles.SelectedMenuContainer>
          <styles.SelectedMenuItem>{section}</styles.SelectedMenuItem>
          <ArrowlessSmall />
        </styles.SelectedMenuContainer>
      </a>
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
      <styles.MenuContainer>
        {getMenuItem("about", selectedSection)}
        {getMenuItem("work", selectedSection)}
      </styles.MenuContainer>
    </styles.SidebarMenu>
  );
};

export default SidebarMenu;
