import { h, Component, Fragment } from "preact";
import { Link } from "react-router-dom";

import ArrowlessIcon from "../../../icons/Arrowless";

import Footer from "../../../components/Footer";
import PageContent from "../../../components/PageContent";

import * as styles from "./styles";
import * as constants from "../../../constants";

export default class Content extends Component {
  getMagnetLink() {
    return (
      <Fragment>
        <styles.CallToActionText marginRight="12px">
          explore case study
        </styles.CallToActionText>
        <ArrowlessIcon />
      </Fragment>
    );
  }

  getMagnetCaseStudy() {
    return (
      <styles.CaseStudyContainer>
        <Link to="/magnet">
          <styles.Header>Magnet Forensics</styles.Header>
          <styles.Text marginTop="12px">
            Redesigning the experience of training forensic investigators.
          </styles.Text>
          <styles.CallToActionContainer marginTop="50px">
            {this.getMagnetLink()}
          </styles.CallToActionContainer>
          <styles.ImageWrapper>
            <styles.MaxWidthImage src={constants.magnetUrl} />
          </styles.ImageWrapper>
        </Link>
      </styles.CaseStudyContainer>
    );
  }

  getAODACaseStudy() {
    return (
      <styles.CaseStudyContainer marginTop="70px">
        <styles.Header>AODA Accessibility Project</styles.Header>
        <styles.Text marginTop="12px">
          A comprehensive testing guide designed to onboard non-technical
          stakeholders.
        </styles.Text>
        <styles.CallToActionContainer marginTop="50px">
          <styles.CallToActionText>🤞coming soon</styles.CallToActionText>
        </styles.CallToActionContainer>
        <styles.ImageWrapper>
          <styles.MaxWidthImage src={constants.aodaUrl} />
        </styles.ImageWrapper>
      </styles.CaseStudyContainer>
    );
  }

  getNetsweeperCaseStudy() {
    return (
      <styles.CaseStudyContainer marginTop="70px">
        <styles.Header>Netsweeper</styles.Header>
        <styles.Text marginTop="12px">
          Transforming the way online purchases are processed
        </styles.Text>
        <styles.CallToActionContainer marginTop="50px">
          <styles.CallToActionText>
            😫 currently unavailable
          </styles.CallToActionText>
        </styles.CallToActionContainer>
        <styles.RelativeImageWrapper>
          <styles.MaxWidthImage src={constants.netsweeperUrl} />
          <styles.LockIconWrapper />
        </styles.RelativeImageWrapper>
      </styles.CaseStudyContainer>
    );
  }

  getTTCCaseStudy() {
    return (
      <styles.CaseStudyContainer marginTop="70px">
        <styles.Header>TTC Exit</styles.Header>
        <styles.Text marginTop="12px">
          A tool that helps you shorten your commute and get you out of the
          subway station.
        </styles.Text>
        <styles.CallToActionContainer marginTop="50px">
          <styles.CallToActionText>🤞coming soon</styles.CallToActionText>
        </styles.CallToActionContainer>
        <styles.ImageWrapper>
          <styles.MaxWidthImage src={constants.ttcUrl} />
        </styles.ImageWrapper>
      </styles.CaseStudyContainer>
    );
  }

  getCanvassCaseStudy() {
    return (
      <styles.CaseStudyContainer marginTop="70px">
        <Link to="/canvass">
          <styles.Header>Canvass AI</styles.Header>
          <styles.Text marginTop="12px">
            An artificial intelligence application that trains and delivers
            predictive insights for industrial plant operations.
          </styles.Text>
          <styles.CallToActionContainer marginTop="50px">
            <styles.CallToActionText marginRight="12px">
              explore case study
            </styles.CallToActionText>
            <ArrowlessIcon />
          </styles.CallToActionContainer>
          <styles.ImageWrapper>
            <styles.MaxWidthImage src={constants.canvassUrl} />
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
        {this.getCanvassCaseStudy()}
        {this.getAODACaseStudy()}
        {this.getNetsweeperCaseStudy()}
        {this.getTTCCaseStudy()}
        <Footer />
      </PageContent>
    );
  }
}
