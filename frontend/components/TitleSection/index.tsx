import { h, FunctionComponent, VNode } from "preact";

import GoBackHeader from "../GoBackHeader";
import MaxWidthImage from "../MaxWidthImage";
import SidebarMenu from "../SidebarMenu";

import * as styles from "./styles";

interface TitleSectionProps {
  title: string;
  titleSubText: string;
  heroImgUrl: string;
}

const TitleSection: FunctionComponent<TitleSectionProps> = ({ heroImgUrl, title, titleSubText }): VNode => {
  return (
    <styles.Container>
      <SidebarMenu scrollSection="about" />
      <styles.Section>
        <GoBackHeader />
        <styles.TitleText>{title}</styles.TitleText>
        <styles.TitleSubText>{titleSubText}</styles.TitleSubText>
        <MaxWidthImage imageUrl={heroImgUrl} modalImageUrl={heroImgUrl} />
      </styles.Section>
    </styles.Container>
  );
};

export default TitleSection;
