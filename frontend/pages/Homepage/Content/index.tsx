import { h, Component, Fragment } from "preact";
import { Link } from "react-router-dom";

import ArrowlessIcon from "../../../icons/Arrowless";

import Footer from "../../../components/Footer";
import PageContent from "../../../components/PageContent";

import * as styles from "./styles";
import * as constants from "../../../constants";

export default class Content extends Component {
  getLink() {
    return (
      <Fragment>
        <styles.CallToActionText marginRight="12px">explore case study</styles.CallToActionText>
        <ArrowlessIcon />
      </Fragment>
    );
  }

  getMagnetCaseStudy() {
    return (
      <styles.CaseStudyContainer>
        <Link to="/magnet">
          <styles.Header>Magnet Forensics</styles.Header>
          <styles.Text marginTop="12px">Redesigning the experience of training forensic investigators.</styles.Text>
          <styles.CallToActionContainer marginTop="50px">{this.getLink()}</styles.CallToActionContainer>
          <styles.ImageWrapper>
            <styles.MaxWidthImage src={constants.magnetUrl2x} />
          </styles.ImageWrapper>
        </Link>
      </styles.CaseStudyContainer>
    );
  }

  getOnCallCaseStudy() {
    return (
      <styles.CaseStudyContainer marginTop="70px">
        <Link to="/oncall">
          <styles.Header>OnCall Health</styles.Header>
          <styles.Text marginTop="12px">
            Developing a brand new identity for a virtual care company in Canada
          </styles.Text>
          <styles.CallToActionContainer marginTop="50px">{this.getLink()}</styles.CallToActionContainer>
          <styles.ImageWrapper>
            <styles.MaxWidthImage src={constants.oncallUrl2x} />
          </styles.ImageWrapper>
        </Link>
      </styles.CaseStudyContainer>
    );
  }

  getEsightCaseStudy() {
    return (
      <styles.CaseStudyContainer marginTop="70px">
        <Link to="/esight">
          <styles.Header>eSight Eyewear</styles.Header>
          <styles.Text marginTop="12px">Designing tools that empower people with visual impairments</styles.Text>
          <styles.CallToActionContainer marginTop="50px">{this.getLink()}</styles.CallToActionContainer>
          <styles.ImageWrapper>
            <styles.MaxWidthImage src={constants.esightUrl2x} />
          </styles.ImageWrapper>
        </Link>
      </styles.CaseStudyContainer>
    );
  }

  getNetsweeperCaseStudy() {
    return (
      <styles.CaseStudyContainer marginTop="70px">
        <styles.Header>Netsweeper</styles.Header>
        <styles.Text marginTop="12px">Transforming the way online purchases are processed</styles.Text>
        <styles.CallToActionContainer marginTop="50px">
          <styles.CallToActionText>😫 currently unavailable</styles.CallToActionText>
        </styles.CallToActionContainer>
        <styles.RelativeImageWrapper>
          <styles.MaxWidthImage src={constants.netsweeperUrl2x} />
          <styles.LockIconWrapper />
        </styles.RelativeImageWrapper>
      </styles.CaseStudyContainer>
    );
  }

  getCanvassCaseStudy() {
    return (
      <styles.CaseStudyContainer marginTop="70px">
        <Link to="/canvass">
          <styles.Header>Canvass AI</styles.Header>
          <styles.Text marginTop="12px">
            An artificial intelligence application that trains and delivers predictive insights for industrial plant
            operations.
          </styles.Text>
          <styles.CallToActionContainer marginTop="50px">
            <styles.CallToActionText marginRight="12px">explore case study</styles.CallToActionText>
            <ArrowlessIcon />
          </styles.CallToActionContainer>
          <styles.ImageWrapper>
            <styles.MaxWidthImage src={constants.canvassUrl2x} />
          </styles.ImageWrapper>
        </Link>
      </styles.CaseStudyContainer>
    );
  }

  render() {
    return (
      <PageContent width={65} widthOffset={115} maxWidth={725}>
        <styles.SpacerDiv marginTop="45px" />
        {this.getMagnetCaseStudy()}
        {this.getOnCallCaseStudy()}
        {this.getEsightCaseStudy()}
        {this.getCanvassCaseStudy()}
        {this.getNetsweeperCaseStudy()}
        <Footer />
      </PageContent>
    );
  }
}
