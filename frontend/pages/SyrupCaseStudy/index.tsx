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

export default class SyrupCaseStudy extends Component<{}> {
  getProjectInfo() {
    const roles = [
      "design sprint",
      "brainstorming",
      "prototyping",
      "visual designs",
      "visual QA",
    ];
    return <TextList header="role" listItems={roles} />;
  }

  getProjectType() {
    const projectTypes = ["web application"];
    return <TextList header="project type" listItems={projectTypes} />;
  }

  getTimeline() {
    return <TextList header="timeline" listItems={["july - december 2019"]} />;
  }

  getToolsInfo() {
    const tools = ["sketch", "abstract", "invision", "miro", "google forms"];
    const list = <TextList header="tools" listItems={tools} />;
    return <styles.Column marginBottom="30px">{list}</styles.Column>;
  }

  getCredits() {
    const credits = [
      { name: "graham mcfie", title: "(lead designer)" },
      { name: "lisa hua", title: "(ui/ux designer)" },
      { name: "carlos chacon", title: "(product manager)" },
      { name: "orest hazda", title: "(lead developer)" },
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
      <PageSidebar
        width={32}
        widthOffset={115}
        maxWidth="435"
        minWidth="300"
        marginRight={45}
      >
        <styles.Title marginBottom="40px">SYRUP</styles.Title>
        <styles.Text marginBottom="10px">{copy.titleDescription}</styles.Text>
        {this.getSidebarContent()}
      </PageSidebar>
    );
  }

  getContextSection() {
    return (
      <Fragment>
        <SectionHeader title="goals" content={copy.context} />
      </Fragment>
    );
  }

  getBulletList(copyList: string[]) {
    const liEls = copyList.map((copyStr) => (
      <styles.ListItem>{copyStr}</styles.ListItem>
    ));
    return <styles.BulletList>{liEls}</styles.BulletList>;
  }

  getDesignSprintSection() {
    return (
      <Fragment>
        <SectionHeader title="design sprint" content={copy.designSprint} />
        <styles.SpacerDiv marginTop="30px" marginBottom="50px">
          <MaxWidthImage
            imageUrl={constants.designSprintUrl}
            modalImageUrl={constants.designSprintUrl2x}
          />
        </styles.SpacerDiv>
        <styles.BigLightText marginBottom="30px">
          {copy.designSprintCaption}
        </styles.BigLightText>
        <styles.SmallHeader marginBottom="15px">insights</styles.SmallHeader>
        <ParagraphText content={copy.insightsListOneTitle} />
        {this.getBulletList(copy.insightsListOne)}
        <ParagraphText content={copy.insightsListTwoTitle} />
        {this.getBulletList(copy.insightsListTwo)}
      </Fragment>
    );
  }

  getConceptsSection() {
    return (
      <Fragment>
        <SectionHeader title="concepts" content={copy.concepts} />
        <ParagraphText content={copy.conceptsParagraph} />
        <styles.SpacerDiv marginTop="30px" marginBottom="50px">
          <MaxWidthImage
            imageUrl={constants.f2oUrl}
            modalImageUrl={constants.f2oUrl2x}
          />
        </styles.SpacerDiv>
        <styles.SmallHeader marginBottom="15px">outcomes</styles.SmallHeader>
        <ParagraphText content={copy.outcomes} />
      </Fragment>
    );
  }

  getDesignSection() {
    return (
      <Fragment>
        <SectionHeader title="design" content={copy.design} />
        <styles.SpacerDiv marginTop="30px" marginBottom="50px">
          <MaxWidthImage
            imageUrl={constants.conceptsUrl2x}
            modalImageUrl={constants.conceptsUrl2x}
          />
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
        {this.getContextSection()}
        {this.getDesignSprintSection()}
        {this.getConceptsSection()}
        {this.getDesignSection()}
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
