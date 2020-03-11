import { h, Component, Fragment } from "preact";

import ArrowlessIcon from "../icons/Arrowless";
import DownArrowIcon from "../icons/DownArrow";

import * as styles from "./styles";
import * as constants from "../constants";
import description from "./content.txt";
import description2 from "./content-2.txt";

const isMobile = (): boolean => {
  return screen.width < 768;
};

interface SidebarState {
  isCollapsed: boolean;
}

export default class Sidebar extends Component<{}, SidebarState> {
  state = {
    isCollapsed: isMobile()
  };

  getCollapseButton() {
    if (this.state.isCollapsed && isMobile()) {
      return <Fragment />;
    }

    return (
      <button onClick={this.onCollapse}>
        <styles.Header>collapse</styles.Header>
      </button>
    );
  }

  getContent() {
    if (this.state.isCollapsed) {
      return (
        <button onClick={this.onReadMore}>
          <styles.Header>read more</styles.Header>
        </button>
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
        <div>
          <img src={constants.pankoUrl} />
          <styles.DogSubtitleText marginTop="10px">
            precious panko
          </styles.DogSubtitleText>
        </div>
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
          <styles.SmallText>2018-present</styles.SmallText>
        </styles.Row>
        <styles.Row marginTop="6px">
          <styles.SmallText>George Brown</styles.SmallText>
          <styles.SmallText>2017-2018</styles.SmallText>
        </styles.Row>
        <styles.Row marginTop="6px">
          <styles.SmallText>University of Toronto</styles.SmallText>
          <styles.SmallText>2012-2016</styles.SmallText>
        </styles.Row>
      </styles.TextTable>
    );
  }
}
