import { h, FunctionComponent, VNode } from "preact";

import ArrowlessSmall from "../../icons/ArrowlessSmall";
import Logo from "../../icons/Logo";

import * as styles from "./styles";

export type Sections = "about" | "work";

interface SidebarMenuProps {
  selectedSection: Sections;
  onSelectSection: (section: Sections) => void;
}

const BACKGROUND_MAP = {
  about: "white",
  work: "",
};

function getMenuItem(section: Sections, selectedSection: Sections, setSection: (section: Sections) => void): VNode {
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

  const onClick = () => {
    setSection(section);
  };

  return (
    <div>
      <a href={`#${section}`} onClick={onClick}>
        <styles.MenuItem>{section}</styles.MenuItem>
      </a>
    </div>
  );
}

const SidebarMenu: FunctionComponent<SidebarMenuProps> = ({ selectedSection, onSelectSection }): VNode => {
  const background = BACKGROUND_MAP[selectedSection];

  return (
    <styles.SidebarMenu background={background}>
      <styles.LogoWrapper>
        <Logo />
      </styles.LogoWrapper>
      <styles.MenuContainer>
        {getMenuItem("about", selectedSection, onSelectSection)}
        {getMenuItem("work", selectedSection, onSelectSection)}
      </styles.MenuContainer>
    </styles.SidebarMenu>
  );
};

export default SidebarMenu;
