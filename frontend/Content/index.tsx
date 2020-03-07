import { h, Component } from "preact";

import ArrowlessIcon from "../icons/Arrowless";

import * as styles from "./styles";
import * as constants from "../constants";

export default class Content extends Component {
    getMagnetCaseStudy() {
        return (
            <styles.CaseStudyContainer>
                <styles.Header>
                    Magnet Forensics
                </styles.Header>
                <styles.Text marginTop="12px">
                    Redesigning the experience of training forensic investigators.
                </styles.Text>
                <styles.CallToActionContainer marginTop="50px">
                    <styles.CallToActionText marginRight="12px">
                        explore case study
                    </styles.CallToActionText>
                    <ArrowlessIcon />
                </styles.CallToActionContainer>
                <styles.ImageWrapper>
                    <img src={constants.magnetUrl} />
                </styles.ImageWrapper>
            </styles.CaseStudyContainer>
        )
    }

    getNetsweeperCaseStudy() {
        return (
            <styles.CaseStudyContainer marginTop="65px">
                <styles.Header>
                    Netsweeper
                </styles.Header>
                <styles.Text marginTop="12px">
                    Transforming the way online purchases are processed
                </styles.Text>
                <styles.CallToActionText marginTop="50px">
                    😫 currently unavailable
                </styles.CallToActionText>
                <styles.ImageWrapper>
                    <img src={constants.netsweeperUrl} />
                </styles.ImageWrapper>
            </styles.CaseStudyContainer>
        )
    }

    getActoCaseStudy() {
        return (
            <styles.CaseStudyContainer marginTop="65px">
                <styles.Header>
                    ACTO
                </styles.Header>
                <styles.Text marginTop="12px">
                    Landing page that successfully booked meetings at the LTEN 2019 conference
                </styles.Text>
                <styles.CallToActionText marginTop="50px">
                    🤞coming soon
                </styles.CallToActionText>
                <styles.ImageWrapper>
                    <img src={constants.actoUrl} />
                </styles.ImageWrapper>
            </styles.CaseStudyContainer>
        )
    }

    getCanvassCaseStudy() {
        return (
            <styles.CaseStudyContainer marginTop="65px">
                <styles.Header>
                    Canvass.io
                </styles.Header>
                <styles.Text marginTop="12px">
                    An artificial intelligence application that trains and delivers predictive insights for industrial plant operations.
                </styles.Text>
                <styles.CallToActionText marginTop="50px">
                    🤞coming soon
                </styles.CallToActionText>
            </styles.CaseStudyContainer>
        )
    }

    getSessionzCaseStudy() {
        return (
            <styles.CaseStudyContainer marginTop="65px">
                <styles.Header>
                    Sessionz
                </styles.Header>
                <styles.Text marginTop="12px">
                    A platform that enables individuals to find and book learning opportunities with knowledgeable hosts.
                </styles.Text>
                <styles.CallToActionText marginTop="50px">
                    🤞coming soon
                </styles.CallToActionText>
                <styles.ImageWrapper>
                    <img src={constants.sessionzUrl} />
                </styles.ImageWrapper>
            </styles.CaseStudyContainer>
        )
    }

    getYumbaCaseStudy() {
        return (
            <styles.CaseStudyContainer marginTop="65px">
                <styles.Header>
                    YUMBA
                </styles.Header>
                <styles.Text marginTop="12px">
                    A web application that streamlines the checkout process for a meal delivery company.
                </styles.Text>
                <styles.CallToActionText marginTop="50px">
                    🤞coming soon
                </styles.CallToActionText>
                <styles.ImageWrapper>
                    <img src={constants.yumbaUrl} />
                </styles.ImageWrapper>
            </styles.CaseStudyContainer>
        )
    }

    getFooter() {
        return (
            <styles.Footer marginTop="65px">
                <styles.LeftFooter>
                    © 2019 lisa hua
                </styles.LeftFooter>
                <styles.RightFooter>
                    Made with lots of 🍵 and ❣ from my couch
                </styles.RightFooter>
            </styles.Footer>
        )
    }

    render() {
        return (
            <styles.Content>
                {this.getMagnetCaseStudy()}
                {this.getNetsweeperCaseStudy()}
                {this.getActoCaseStudy()}
                {this.getCanvassCaseStudy()}
                {this.getSessionzCaseStudy()}
                {this.getYumbaCaseStudy()}
                {this.getFooter()}
            </styles.Content>
        );
    }
}
