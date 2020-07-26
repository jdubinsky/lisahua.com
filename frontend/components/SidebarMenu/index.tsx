import { h, FunctionComponent, VNode } from "preact";
import { useEffect, useState } from "preact/hooks";
import { useLocation } from "react-router-dom";

import ArrowlessSmall from "../../icons/ArrowlessSmall";
import Logo from "../../icons/Logo";

import * as styles from "./styles";

export type Sections = "about" | "work";
const SECTIONS: Sections[] = ["about", "work"];

const SidebarMenu: FunctionComponent = (): VNode => {
  const [section, setSection] = useState<Sections>("about");
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (!hash || hash === undefined) {
      return;
    }

    const currentSection = hash.split("#")[1];
    setSection(currentSection);
  }, [location]);

  const getMenuItem = (section: Sections, selectedSection: Sections): VNode => {
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
      <a href={`#${section}`}>
        <styles.MenuItem>{section}</styles.MenuItem>
      </a>
    );
  };

  return (
    <styles.SidebarMenu>
      <styles.LogoWrapper>
        <Logo />
      </styles.LogoWrapper>
      <styles.MenuContainer>{SECTIONS.map((s) => getMenuItem(s, section))}</styles.MenuContainer>
      <div />
    </styles.SidebarMenu>
  );
};

export default SidebarMenu;
