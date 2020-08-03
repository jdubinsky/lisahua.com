import { h, FunctionComponent, VNode } from "preact";
import { Link } from "react-router-dom";

import ArrowlessSmall from "../../icons/ArrowlessSmall";
import Logo from "../../icons/Logo";

import * as styles from "./styles";

export type Sections = "about" | "work";
const SECTIONS: Sections[] = ["about", "work"];

interface SidebarMenuProps {
  scrollSection: Sections;
}

const SidebarMenu: FunctionComponent<SidebarMenuProps> = ({ scrollSection }): VNode => {
  const selectedSection = scrollSection;

  const getMenuItem = (section: Sections, selectedSection: Sections): VNode => {
    if (section === selectedSection) {
      return (
        <a href={`/#${section}`}>
          <styles.SelectedMenuContainer>
            <styles.SelectedMenuItem>{section}</styles.SelectedMenuItem>
            <ArrowlessSmall />
          </styles.SelectedMenuContainer>
        </a>
      );
    }

    return (
      <a href={`/#${section}`}>
        <styles.MenuItem>{section}</styles.MenuItem>
      </a>
    );
  };

  return (
    <styles.SidebarMenu>
      <Link to="/">
        <styles.LogoWrapper>
          <Logo />
        </styles.LogoWrapper>
      </Link>
      <styles.MenuContainer>{SECTIONS.map((s) => getMenuItem(s, selectedSection))}</styles.MenuContainer>
      <div />
    </styles.SidebarMenu>
  );
};

export default SidebarMenu;
