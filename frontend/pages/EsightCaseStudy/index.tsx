import { h, Component, Fragment } from "preact";
import { Link } from "react-router-dom";

import ArrowlessIcon from "../../icons/Arrowless";
import Footer from "../../components/Footer";
import MaxWidthImage from "../../components/MaxWidthImage";
import SectionHeader from "../../components/SectionHeader";
import PageContent from "../../components/PageContent";
import PageSidebar from "../../components/PageSidebar";
import ParagraphText from "../../components/ParagraphText";
import TextList from "../../components/TextList";

import useMobile from "../../hooks/useMobile";

import * as constants from "./constants";
import * as copy from "./copy";
import * as styles from "./styles";

export default class EsightCaseStudy extends Component<{}> {
  getProjectInfo() {
    const roles = [
      "AA accessibility",
      "information architecture",
      "customer journey mapping",
      "responsive design",
      "visual design",
      "prototyping",
    ];
    return <TextList header="role" listItems={roles} />;
  }

  getProjectType() {
    const projectTypes = ["website"];
    return <TextList header="project type" listItems={projectTypes} />;
  }

  getTimeline() {
    return <TextList header="timeline" listItems={["january - march 2020"]} />;
  }

  getToolsInfo() {
    const tools = [
      "figma",
      "whimsical",
      "aXe",
      "voiceover",
      "webAIM",
      "start colour contrast analyzer",
    ];
    const list = <TextList header="tools" listItems={tools} />;
    return <styles.Column marginBottom="30px">{list}</styles.Column>;
  }

  getCredits() {
    const credits = [
      { name: "yusef dualeh", title: "(product manager)" },
      { name: "joshua van boxtel", title: "(lead developer)" },
      { name: "lisa hua", title: "(user experience designer)" },
    ];

    const creditTexts = credits.map((credit) => {
      return (
        <styles.Text marginBottom="20px">
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
      <PageSidebar
        width="35"
        widthOffset="115"
        maxWidth="435"
        minWidth="300"
        marginRight={45}
      >
        <styles.Title marginBottom="40px">eSight Eyewear</styles.Title>
        <styles.Text marginBottom="10px">{copy.titleDescription}</styles.Text>
        {this.getSidebarContent()}
      </PageSidebar>
    );
  }

  getGoalsSection() {
    return (
      <Fragment>
        <SectionHeader title="goals" content={copy.goals} />
      </Fragment>
    );
  }

  getResearchSection() {
    return (
      <Fragment>
        <SectionHeader title="research" content={copy.research} />
        <styles.SmallHeader marginBottom="15px">
          information architecture
        </styles.SmallHeader>
        <ParagraphText content={copy.infoArchitecture} />
        <styles.SpacerDiv marginTop="30px" marginBottom="50px">
          <MaxWidthImage
            imageUrl={constants.infoArchitectureUrl}
            modalImageUrl={constants.infoArchitectureUrl2x}
          />
        </styles.SpacerDiv>
        <styles.SmallHeader marginBottom="15px">
          high fidelity designs
        </styles.SmallHeader>
        <ParagraphText content={copy.highFidelityDesigns} />
        <styles.SpacerDiv marginTop="30px" marginBottom="50px">
          <MaxWidthImage
            imageUrl={constants.designsUrl}
            modalImageUrl={constants.designsUrl2x}
          />
        </styles.SpacerDiv>
        <styles.BigLightText marginBottom="30px">
          {copy.designsImgSubtitle}
        </styles.BigLightText>
      </Fragment>
    );
  }

  getResultsSection() {
    return (
      <Fragment>
        <SectionHeader title="results" content={copy.results} />
        <styles.SpacerDiv marginBottom="50px">
          <MaxWidthImage
            imageUrl={constants.accessibilityToolsUrl}
            modalImageUrl={constants.accessibilityToolsUrl2x}
          />
        </styles.SpacerDiv>
        <styles.BigLightText marginBottom="30px">
          {copy.resultsImgSubtitle}
        </styles.BigLightText>
      </Fragment>
    );
  }

  getContent() {
    return (
      <PageContent width={65} widthOffset={115} maxWidth={725}>
        <styles.CenteredTable marginTop="30px" marginBottom="30px">
          <Link to="/">
            <ArrowlessIcon />
          </Link>
          <Link to="/">
            <styles.BoldText marginLeft="12px">
              back to all projects
            </styles.BoldText>
          </Link>
        </styles.CenteredTable>
        <styles.SpacerDiv marginBottom="50px">
          <MaxWidthImage
            imageUrl={constants.heroUrl}
            modalImageUrl={constants.heroUrl2x}
          />
        </styles.SpacerDiv>
        {this.getGoalsSection()}
        {this.getResearchSection()}
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
