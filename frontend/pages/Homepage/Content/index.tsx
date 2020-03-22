import { h, Component, Fragment } from "preact";
import { Link } from "react-router-dom";

import ArrowlessIcon from "../../../icons/Arrowless";

import Footer from "../../../components/Footer";

import * as styles from "./styles";
import * as constants from "../../../constants";

const ENABLE_MAGNET = true;

export default class Content extends Component {
  getMagnetLink() {
    if (ENABLE_MAGNET) {
      return (
        <Fragment>
          <styles.CallToActionText marginRight="12px">
            explore case study
          </styles.CallToActionText>
          <ArrowlessIcon />
        </Fragment>
      );
    }

    return <styles.CallToActionText>🤞 coming soon</styles.CallToActionText>;
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
            <img src={constants.magnetUrl} />
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
          <img src={constants.aodaUrl} />
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
          <img src={constants.netsweeperUrl} />
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
          <img src={constants.ttcUrl} />
        </styles.ImageWrapper>
      </styles.CaseStudyContainer>
    );
  }

  getCanvassCaseStudy() {
    return (
      <styles.CaseStudyContainer marginTop="70px">
        <styles.Header>Canvass.io</styles.Header>
        <styles.Text marginTop="12px">
          An artificial intelligence application that trains and delivers
          predictive insights for industrial plant operations.
        </styles.Text>
        <styles.CallToActionContainer marginTop="50px">
          <styles.CallToActionText>🤞coming soon</styles.CallToActionText>
        </styles.CallToActionContainer>
        <styles.ImageWrapper>
          <img src={constants.canvassUrl} />
        </styles.ImageWrapper>
      </styles.CaseStudyContainer>
    );
  }

  render() {
    return (
      <styles.Content>
        {this.getMagnetCaseStudy()}
        {this.getAODACaseStudy()}
        {this.getNetsweeperCaseStudy()}
        {this.getCanvassCaseStudy()}
        {this.getTTCCaseStudy()}
        <Footer />
      </styles.Content>
    );
  }
}
