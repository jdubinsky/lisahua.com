import { h, Fragment, FunctionComponent, VNode } from "preact";
import { Link } from "react-router-dom";

import ArrowlessIcon from "../../icons/Arrowless";
import Footer from "../../components/Footer";
import GoBackHeader from "../../components/GoBackHeader";
import SidebarMenu from "../../components/SidebarMenu";
import StatusBadge from "../../components/StatusBadge";

import * as styles from "./styles";

const NotFound: FunctionComponent = (): VNode => {
  return (
    <styles.Container>
      <SidebarMenu scrollSection="about" />
      <styles.Section>
        <styles.StatusBadgeContainer>
          <StatusBadge status="active" />
        </styles.StatusBadgeContainer>
        <styles.BigText>Oof.</styles.BigText>
        <styles.SubText>This page doesn't look right</styles.SubText>
        <Link to="/">
          <styles.BackToAllContainer>
            <styles.BoldText>back to all projects</styles.BoldText>
            <ArrowlessIcon />
          </styles.BackToAllContainer>
        </Link>
        <Footer />
      </styles.Section>
    </styles.Container>
  );
};

export default NotFound;
