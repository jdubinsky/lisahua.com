import { h, Component } from "preact";
import { Link } from "react-router-dom";

import ArrowlessIcon from "../icons/Arrowless";

import * as styles from "./styles";
import * as constants from "../constants";

const ENABLE_MAGNET = process.env.NODE_ENV !== "production";

export default class Content extends Component {
    getMagnetLink() {
        if (ENABLE_MAGNET) {
            return (
                <Link to="/magnet">
                    explore case study
                </Link>
            );
        }

        return (
            <p>🤞coming soon</p>
        );
    }
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
                        { this.getMagnetLink() }
                    </styles.CallToActionText>
                    <ArrowlessIcon />
                </styles.CallToActionContainer>
                <styles.ImageWrapper>
                    <img src={constants.magnetUrl} />
                </styles.ImageWrapper>
            </styles.CaseStudyContainer>
        )
    }

    getAODACaseStudy() {
        return (
            <styles.CaseStudyContainer marginTop="65px">
                <styles.Header>
                    AODA Accessibility Project
                </styles.Header>
                <styles.Text marginTop="12px">
                    A comprehensive testing guide designed to onboard non-technical stakeholders.
                </styles.Text>
                <styles.CallToActionText marginTop="50px">
                    🤞coming soon
                </styles.CallToActionText>
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

    getTTCCaseStudy() {
        return (
            <styles.CaseStudyContainer marginTop="65px">
                <styles.Header>
                    TTC Exit
                </styles.Header>
                <styles.Text marginTop="12px">
                    A tool that helps you shorten your commute and get you out of the subway station.
                </styles.Text>
                <styles.CallToActionText marginTop="50px">
                    🤞coming soon
                </styles.CallToActionText>
                <styles.ImageWrapper>
                    <img src={constants.ttcUrl} />
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
                {this.getAODACaseStudy()}
                {this.getNetsweeperCaseStudy()}
                {this.getCanvassCaseStudy()}
                {this.getTTCCaseStudy()}
                {this.getFooter()}
            </styles.Content>
        );
    }
}
