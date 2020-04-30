import { h, Component, Fragment } from "preact";

import ArrowlessIcon from "../../../icons/Arrowless";
import DownArrowIcon from "../../../icons/DownArrow";
import isMobile from "../../../is-mobile";
import * as constants from "../../../constants";

import * as styles from "./styles";
import description from "./content.txt";
import description2 from "./content-2.txt";

interface SidebarState {
  isCollapsed: boolean;
}

export default class Sidebar extends Component<{}, SidebarState> {
  state = {
    isCollapsed: isMobile(),
  };

  getCollapseButton() {
    if (!isMobile()) {
      return <Fragment />;
    }

    if (this.state.isCollapsed) {
      return <Fragment />;
    }

    return (
      <styles.ButtonContainer marginTop="50px" marginBottom="30px">
        <button onClick={this.onCollapse}>
          <styles.Header>collapse -</styles.Header>
        </button>
      </styles.ButtonContainer>
    );
  }

  getContent() {
    if (this.state.isCollapsed) {
      return (
        <styles.ButtonContainer marginTop="50px" marginBottom="35px">
          <button onClick={this.onReadMore}>
            <styles.Header>read more +</styles.Header>
          </button>
        </styles.ButtonContainer>
      );
    }

    return (
      <Fragment>
        <styles.Text>{description}</styles.Text>
        <styles.Text>{description2}</styles.Text>
        <styles.TextWithIcon marginTop="34px">
          <DownArrowIcon />
          <styles.Subtext marginLeft="13px">scroll</styles.Subtext>
        </styles.TextWithIcon>
        <styles.Header marginTop="150px">experience & education</styles.Header>
        {this.getExperienceAndEducationTable()}
        <styles.ResumeContainer>
          <styles.CallToActionLink
            href={constants.resumeUrl}
            marginRight="12px"
          >
            <styles.BoldText>View full resume</styles.BoldText>
          </styles.CallToActionLink>
          <ArrowlessIcon />
        </styles.ResumeContainer>
        <styles.Header marginTop="60px">say hello</styles.Header>
        <styles.SmallText>
          <a href="mailto:lisavhua@gmail.com">lisavhua@gmail.com</a>
        </styles.SmallText>
        <styles.Header marginTop="60px">my dogs</styles.Header>
        <styles.DogImagesContainer>
          <styles.MarginRightImg src={constants.pankoUrl} />
          <img src={constants.tootsieUrl} />
        </styles.DogImagesContainer>
        {this.getCollapseButton()}
      </Fragment>
    );
  }

  onReadMore = () => {
    this.setState({ isCollapsed: false });
  };

  onCollapse = () => {
    this.setState({ isCollapsed: true }, () => {
      window.scrollTo(0, 0);
    });
  };

  render() {
    return (
      <styles.Sidebar>
        <styles.Title>I'm Lisa,</styles.Title>
        <styles.Subtitle>a UX designer from Toronto</styles.Subtitle>
        {this.getContent()}
      </styles.Sidebar>
    );
  }

  getExperienceAndEducationTable() {
    return (
      <styles.TextTable>
        <styles.Row>
          <styles.SmallText>Crowdlinker</styles.SmallText>
          <styles.SmallText>2017-2020</styles.SmallText>
        </styles.Row>
        <styles.Row marginTop="6px">
          <styles.SmallText>George Brown</styles.SmallText>
          <styles.SmallText>2016-2017</styles.SmallText>
        </styles.Row>
        <styles.Row marginTop="6px">
          <styles.SmallText>University of Toronto</styles.SmallText>
          <styles.SmallText>2012-2016</styles.SmallText>
        </styles.Row>
      </styles.TextTable>
    );
  }
}
