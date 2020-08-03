import { h, Fragment, FunctionComponent, VNode } from "preact";
import { useEffect } from "preact/hooks";

import GoBackHeader from "../GoBackHeader";
import MaxWidthImage from "../MaxWidthImage";
import SidebarMenu from "../SidebarMenu";
import StatusBadge from "../StatusBadge";

import isTablet from "../../is-tablet";

import * as styles from "./styles";

interface TitleSectionProps {
  title: string;
  titleSubText: string;
  heroImgUrl: string;
}

const TitleSection: FunctionComponent<TitleSectionProps> = ({ heroImgUrl, title, titleSubText }): VNode => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <styles.Container>
      <SidebarMenu scrollSection="work" />
      <styles.Section>
        {isTablet() ? <Fragment /> : <GoBackHeader />}
        {isTablet() ? (
          <Fragment />
        ) : (
          <styles.BadgeContainer>
            <StatusBadge status="active" />
          </styles.BadgeContainer>
        )}
        <styles.TitleText>{title}</styles.TitleText>
        <styles.TitleSubText>{titleSubText}</styles.TitleSubText>
        <MaxWidthImage imageUrl={heroImgUrl} modalImageUrl={heroImgUrl} />
      </styles.Section>
    </styles.Container>
  );
};

export default TitleSection;
