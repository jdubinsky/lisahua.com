import { h, Component, Fragment } from "preact";
import { Link } from "react-router-dom";

import ArrowlessIcon from "../../icons/Arrowless";
import Footer from "../../components/Footer";
import MaxWidthImage from "../../components/MaxWidthImage";
import SectionHeader from "../../components/SectionHeader";
import PageContent from "../../components/PageContent";
import PageSidebar from "../../components/PageSidebar";
import TextList from "../../components/TextList";

import withMobileSupport, {
  WithMobileSupportProps,
} from "../../hoc/withMobileSupport";

import * as constants from "./constants";
import * as copy from "./copy";
import * as styles from "./styles";

export class OnCallCaseStudy extends Component<WithMobileSupportProps> {
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
    if (this.props.isCollapsed) {
      return (
        <styles.AvenirText>
          <button onClick={this.props.onReadMore}>read more +</button>
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
        {this.props.getCollapseButton()}
      </Fragment>
    );
  }

  getSidebar() {
    return (
      <PageSidebar width="35" widthOffset="115" maxWidth="375" minWidth="300">
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
          <MaxWidthImage
            imageUrl={constants.reinventUrl}
            modalImageUrl={constants.reinventUrl2x}
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

export default withMobileSupport(OnCallCaseStudy);
