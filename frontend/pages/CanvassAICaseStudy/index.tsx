import { h, Component, Fragment } from "preact";
import { Link } from "react-router-dom";

import ArrowlessIcon from "../../icons/Arrowless";
import Footer from "../../components/Footer";
import SectionHeader from "../../components/SectionHeader";
import TextList from "../../components/TextList";

import isMobile from "../../is-mobile";

import * as constants from "./constants";
import * as copy from "./copy";
import * as styles from "./styles";

export default class CanvassAICaseStudyPage extends Component<{}> {
  state = {
    isCollapsed: isMobile(),
  };

  onReadMore = () => {
    this.setState({ isCollapsed: false });
  };

  onCollapse = () => {
    this.setState({ isCollapsed: true }, () => {
      window.scrollTo(0, 0);
    });
  };

  getCollapseButton() {
    if (!isMobile()) {
      return <Fragment />;
    }

    if (this.state.isCollapsed) {
      return <Fragment />;
    }

    return (
      <styles.AvenirText marginTop="30px">
        <button onClick={this.onCollapse}>collapse -</button>
      </styles.AvenirText>
    );
  }

  getProjectInfo() {
    const roles = ["user flow", "wireframes", "visual designs"];
    return <TextList header="role" listItems={roles} />;
  }

  getProjectType() {
    const projectTypes = ["web application"];
    return <TextList header="project type" listItems={projectTypes} />;
  }

  getTimeline() {
    return <TextList header="timeline" listItems={["dec 2017 - feb 2018"]} />;
  }

  getToolsInfo() {
    const tools = ["sketch", "invision", "anima app"];
    const list = <TextList header="tools" listItems={tools} />;
    return <styles.Column marginBottom="30px">{list}</styles.Column>;
  }

  getCredits() {
    const credits = [
      { name: "courtney zorio", title: "(project manager)" },
      { name: "rennie chun", title: "(lead visual designer)" },
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
    if (this.state.isCollapsed) {
      return (
        <styles.AvenirText>
          <button onClick={this.onReadMore}>read more +</button>
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
        {this.getCollapseButton()}
      </Fragment>
    );
  }

  getSidebar() {
    return (
      <styles.SidebarWrapper>
        <styles.SidebarContainer>
          <styles.Title marginBottom="40px">Canvass AI</styles.Title>
          <styles.Text>{copy.titleDescription}</styles.Text>
          {this.getSidebarContent()}
        </styles.SidebarContainer>
      </styles.SidebarWrapper>
    );
  }

  getContextSection() {
    return (
      <Fragment>
        <SectionHeader title="context" content={copy.context} />
        <styles.SpacerDiv marginTop="30px" marginBottom="10px">
          <styles.MaxWidthImage src={constants.oldWebAppUrl} />
        </styles.SpacerDiv>
        <styles.BigLightText marginBottom="50px">
          Screenshots of Canvass AI’s demo environment
        </styles.BigLightText>
      </Fragment>
    );
  }

  getHighlightsSection() {
    return (
      <Fragment>
        <SectionHeader title="highlights" content={copy.highlights} />
        <styles.SmallHeader marginBottom="15px">wireframes</styles.SmallHeader>
        <styles.Text marginBottom="30px">{copy.wireframes}</styles.Text>
        <styles.SpacerDiv marginBottom="50px">
          <styles.MaxWidthImage src={constants.wireframesUrl} />
        </styles.SpacerDiv>
        <styles.SmallHeader marginBottom="15px">user flow</styles.SmallHeader>
        <styles.Text marginBottom="30px">{copy.userFlow}</styles.Text>
        <styles.SpacerDiv marginBottom="10px">
          <styles.MaxWidthImage src={constants.userFlowUrl} />
        </styles.SpacerDiv>
        <styles.BigLightText marginBottom="30px">
          Canvass AI's userflow
        </styles.BigLightText>
        <styles.SmallHeader marginBottom="15px">
          high fidelity designs
        </styles.SmallHeader>
        <styles.Text marginBottom="30px">
          {copy.highFidelityPartOne}
        </styles.Text>
        <styles.SpacerDiv marginBottom="10px">
          <styles.MaxWidthImage src={constants.moodboardUrl} />
        </styles.SpacerDiv>
        <styles.BigLightText marginBottom="30px">
          Visual inspiration gathered in our research
        </styles.BigLightText>
        <styles.Text marginBottom="30px">
          {copy.highFidelityPartTwo}
        </styles.Text>
        <styles.SpacerDiv marginBottom="10px">
          <styles.MaxWidthImage src={constants.tableComparisonUrl} />
        </styles.SpacerDiv>
        <styles.BigLightText marginBottom="50px">
          The brand color and table designs were tweaked for a cleaner look
        </styles.BigLightText>
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
      <styles.ContentWrapper>
        <styles.Content>
          <styles.CenteredTable marginTop="30px" marginBottom="30px">
            <ArrowlessIcon />
            <styles.BoldText marginLeft="12px">
              <Link to="/">back to all projects</Link>
            </styles.BoldText>
          </styles.CenteredTable>
          <styles.SpacerDiv marginBottom="50px">
            <styles.MaxWidthImage src={constants.heroUrl} />
          </styles.SpacerDiv>
          {this.getContextSection()}
          {this.getHighlightsSection()}
          {this.getResultsSection()}
          <Footer />
        </styles.Content>
      </styles.ContentWrapper>
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
