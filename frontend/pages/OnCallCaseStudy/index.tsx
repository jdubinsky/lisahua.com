import { h, Component, Fragment } from "preact";

import Footer from "../../components/Footer";
import GoBackHeader from "../../components/GoBackHeader";
import MaxWidthImage from "../../components/MaxWidthImage";
import SectionHeader from "../../components/SectionHeader";
import PageContent from "../../components/PageContent";
import PageSidebar from "../../components/PageSidebar";
import TextList from "../../components/TextList";

import useMobile from "../../hooks/useMobile";

import * as constants from "./constants";
import * as copy from "./copy";
import * as styles from "./styles";

export default class OnCallCaseStudy extends Component<{}> {
  getProjectInfo() {
    const roles = ["visual design", "high fidelity mockup", "prototyping"];
    return <TextList header="role" listItems={roles} />;
  }

  getProjectType() {
    const projectTypes = ["website"];
    return <TextList header="project type" listItems={projectTypes} />;
  }

  getTimeline() {
    return <TextList header="timeline" listItems={["february 2020"]} />;
  }

  getToolsInfo() {
    const tools = ["figma"];
    const list = <TextList header="tools" listItems={tools} />;
    return <styles.Column marginBottom="30px">{list}</styles.Column>;
  }

  getCredits() {
    const credits = [
      { name: "alison ma", title: "(product manager)" },
      { name: "lisa hua", title: "(user experience designer)" },
    ];

    const creditTexts = credits.map((credit) => {
      return (
        <styles.Text>
          {credit.name}
          <styles.LightText>{credit.title}</styles.LightText>
        </styles.Text>
      );
    });

    return (
      <styles.Column>
        <styles.SubHeader>credits</styles.SubHeader>
        {creditTexts}
      </styles.Column>
    );
  }

  getSidebarContent() {
    const { isCollapsed, onReadMore, getCollapseButton } = useMobile();

    if (isCollapsed) {
      return (
        <styles.AvenirText>
          <button onClick={onReadMore}>read more +</button>
        </styles.AvenirText>
      );
    }

    return (
      <Fragment>
        {this.getProjectInfo()}
        {this.getProjectType()}
        {this.getTimeline()}
        {this.getToolsInfo()}
        {this.getCredits()}
        {getCollapseButton()}
      </Fragment>
    );
  }

  getSidebar() {
    return (
      <PageSidebar width={32} widthOffset={115} maxWidth="375" minWidth="300">
        <styles.Title marginBottom="40px">OnCall</styles.Title>
        <styles.Text marginBottom="10px">{copy.titleDescription}</styles.Text>
        {this.getSidebarContent()}
      </PageSidebar>
    );
  }

  getContextSection() {
    return (
      <Fragment>
        <SectionHeader title="context" content={copy.context} />
        <styles.SpacerDiv marginTop="30px" marginBottom="50px">
          <MaxWidthImage imageUrl={constants.reinventUrl2x} />
        </styles.SpacerDiv>
      </Fragment>
    );
  }

  getResultsSection() {
    return (
      <Fragment>
        <SectionHeader title="results" content={copy.results} />
      </Fragment>
    );
  }

  getContent() {
    return (
      <PageContent width={68} widthOffset={115} maxWidth={725}>
        <GoBackHeader />
        <styles.SpacerDiv marginBottom="50px">
          <MaxWidthImage
            imageUrl={constants.heroUrl2x}
            modalImageUrl={constants.heroUrl2x}
          />
        </styles.SpacerDiv>
        {this.getContextSection()}
        {this.getResultsSection()}
        <Footer />
      </PageContent>
    );
  }

  render() {
    return (
      <styles.Container>
        {this.getSidebar()}
        {this.getContent()}
      </styles.Container>
    );
  }
}
