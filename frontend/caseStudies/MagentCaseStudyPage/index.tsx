import { h, Component } from "preact";
import { Link } from "react-router-dom";

import * as constants from "../../constants";
import ArrowlessIcon from "../../icons/Arrowless";

import * as styles from "./styles";

const description = `
Redesigning the experience of buying and training investigative forensic equipment.
`;

export default class MagnentCaseStudyPage extends Component {
    buildList(header: string, listItems: string[]) {
        const listComponents = listItems.map(item => {
            return (
                <styles.Text>
                    { `• ${item}` }
                </styles.Text>
            )
        });

        return (
            <div>
                <styles.SmallHeader>
                    { header }
                </styles.SmallHeader>
                { listComponents }
            </div>
        );
    }

    getProjectInfo() {
        return (
            <styles.Table marginBottom="30px">
                <styles.Column width="60%">
                    { this.buildList("role", [
                        "information architecture",
                        "user personas",
                        "journey mapping",
                        "wireframes",
                        "stakeholder interviews",
                        "user testing"
                    ])}
                </styles.Column>
                <styles.Column width="40%">
                    { this.buildList("project type", [
                        "marketing",
                        "website"
                    ])}
                    { this.buildList("timeline", ["june - aug 2018"]) }
                </styles.Column>
            </styles.Table>
        );
    }

    getToolsInfo() {
        const list = this.buildList(
            "tools",
            [
                "sketch",
                "invision",
                "highfive",
                "skype for teams"
            ]
        );
        return (
            <styles.Column marginBottom="30px">
                { list }
            </styles.Column>
        );
    }

    getCredits() {
        const list = this.buildList(
            "credits",
            [
                "alison ma (product manager)",
                "joshua van boxtel (lead wordpress developer)",
                "rennie chun (lead visual designer)",
                "justin damer (visual designer)",
                "lisa hua (user experience designer)"
            ]
        );
        return (
            <styles.Column>
                { list }
            </styles.Column>
        );
    }

    getProjectGoals() {
        return (
            <div>
                <styles.SmallHeader>
                    project summary/goals
                </styles.SmallHeader>
                <styles.Text>
                    Redesign the marketing website to achieve:
                </styles.Text>
                <styles.Text>
                    • distinguish the different product offering
                </styles.Text>
                <styles.Text>
                    • introduce a new way of forensic examinations
                </styles.Text>
                <styles.Text>
                    • get trained on how to use the tools
                </styles.Text>
                <styles.Text>
                    • book demos with sales reps
                </styles.Text>
                <styles.Text>
                    • have different users find the right product for them
                </styles.Text>
            </div>
        );
    }

    getContributionsList() {
        return this.buildList(
            "contribution to the project",
            [
                "UX designer in charge of the discovery process which was new at the time",
                "stakeholder interviews, customer journey mapping, personas, IA, and wireframes",
                "user testing & recruitment",
                "handed off designs to visual"
            ]
        );
    }

    getCompetitiveAnalysisList() {
        return this.buildList(
            "competitive analysis",
            [
                "did our own analysis",
                "looked at their competitor’s (mostly product offering) and what magnet was doing differently, how their story was different",
                "most companies did bits and pieces of the examination process, but axiom covered everything",
                "distrusted using a single tool because they were taught to check their work with multiple tools (and didn’t want to replace their existing toolset)",
                "was used to using a mix of open source and other tools along with manual processes instead of automation"
            ]
        );
    }

    getChallenges() {
        return this.buildList(
            "challenges",
            [
                "finding SMEs was difficult because if the niche market",
                "We were limited by our time to find more respondents -- joined slack channels, linkedin groups, forums and posted looking for people to interview"
            ]
        )
    }

    getStakeholderInterviews() {
        return this.buildList(
            "stakeholder interviews",
            [
                "Interviewed with multiple of the VPs and Directors of different departments including the CEO and the Founder/CTO to understand their pain points with the existing site"
            ]
        )
    }

    getCustomerInterviews() {
        return this.buildList(
            "customer interviews",
            [
                "spoke with former forensic examiners from Magnet as well",
                "conducted small surveys to get an understanding of what type of products were in the market for FE, the type of investigations they worked on, and how open were they to trynig out new tools, as well as who were the decision makers in the buying process"
            ]
        );
    }

    getPersonasList() {
        return this.buildList(
            "personas",
            [
                "forensic examiner, mid level careers, very techncial (corporate and police version)",
                "investigator, would be using the other magnet tools, and leading investigations",
                "police chief - lower knowledge of tool, primary decision maker",
                "explored a few other ones like the leaders/promoters who would act as the coaches/thought leaders in the industry but left them out as they weren’t the primary audiences Magnet was looking for",
                "presented to client and matched very similar personas they used internally"
            ]
        );
    }

    getPersonasChallengesList() {
        return this.buildList(
            "challenges",
            [
                "lots of different audiences and marketing team had a hard time segmenting their messaging to the police/corporate",
                "corporate had the money that the client wanted but the police had the mission that the client aligned with older generation of FE didn’t like changing their processes and trying new tools",
                "newer examiners were open to using automated tools and influece their organization’s purchasing decisions"
            ]
        );
    }

    getInformationArchitectureList() {
        return this.buildList(
            "information architecture",
            [
                "Lorem ipsum"
            ]
        );
    }

    getLoFiWireframesList() {
        return this.buildList(
            "low-fidelity wireframes",
            [
                "core functions:",
                "book demos",
                "able to use blog/resources",
                "get training for axiom by a professional",
                "understand difference between tools and how they work together",
                "low fi invision prototype",
                "reviewed weekly with the client on different pages with different goals to get them onboard"
            ]
        );
    }

    getHiFiWireframesList() {
        return this.buildList(
            "high-fidelity wireframes",
            [
                "tested high-fi wireframes with 3 former forensic examiners to get their thoughts on the layout"
            ]
        );
    }

    getNextStepsList() {
        return this.buildList(
            "next steps in the project",
            [
                "Lorem ipsum"
            ]
        );
    }

    getSidebar() {
        return (
            <styles.SidebarContainer>
                <styles.Title>
                    Magnet
                </styles.Title>
                <styles.Title marginBottom="40px">
                    Forensics
                </styles.Title>
                <styles.Text marginBottom="30px">
                    { description }
                </styles.Text>
                { this.getProjectInfo() }
                { this.getToolsInfo() }
                { this.getCredits() }
            </styles.SidebarContainer>
        );
    }

    getContextTable() {
        return (
            <styles.Table>
                <styles.Column width="20%">
                    <styles.Section>
                        context
                    </styles.Section>
                </styles.Column>
                <styles.Column width="80%">
                    <styles.BigText>
                        Magnet came to us with their pain points: too many products, only know for IEF, and lots of stakeholders who wanted different things.
                    </styles.BigText>
                </styles.Column>
            </styles.Table>
        );
    }

    getContent() {
        return (
            <styles.Content>
                <styles.CenteredTable marginBottom="30px">
                    <ArrowlessIcon />
                    <styles.BoldText marginLeft="12px">
                        <Link to="/">
                            back to all projects
                        </Link>
                    </styles.BoldText>
                </styles.CenteredTable>
                { this.getContextTable() }
                <styles.SmallHeader>
                    problem
                </styles.SmallHeader>
                { this.getProjectGoals() }
                <styles.ImgWrapper src={constants.magnetHomeUrl} />
                <styles.SmallHeader>
                    approach
                </styles.SmallHeader>
                <styles.Text>
                    • no rapid design sprints
                </styles.Text>
                <styles.Text>
                    • advocated for a strong discovery phase
                </styles.Text>
                { this.getContributionsList() }
                <styles.Table>
                    <styles.Column width="20%">
                        <styles.Section>
                            research
                        </styles.Section>
                    </styles.Column>
                    <styles.Column width="80%">
                        Lorem ipsum
                    </styles.Column>
                </styles.Table>
                { this.getCompetitiveAnalysisList() }
                { this.getChallenges() }
                <div>
                    { this.getStakeholderInterviews() }
                    <styles.ImgWrapper src={constants.magnetStakeholderUrl} />
                </div>
                <div>
                    { this.getCustomerInterviews() }
                    <styles.ImgWrapper src={constants.magnetCustomerUrl} />
                </div>
                <styles.Table>
                    <styles.Column width="20%">
                        <styles.Section>
                            define
                        </styles.Section>
                    </styles.Column>
                    <styles.Column width="80%">
                        Lorem ipsum
                    </styles.Column>
                </styles.Table>
                { this.getPersonasList() }
                { this.getPersonasChallengesList() }
                <styles.Table>
                    <styles.Column width="20%">
                        <styles.Section>
                            ideate
                        </styles.Section>
                    </styles.Column>
                    <styles.Column width="80%">
                        Lorem ipsum
                    </styles.Column>
                </styles.Table>
                { this.getInformationArchitectureList() }
                { this.getLoFiWireframesList() }
                { this.getHiFiWireframesList() }
                <styles.Table>
                    <styles.Column width="20%">
                        <styles.Section>
                            retro
                        </styles.Section>
                    </styles.Column>
                    <styles.Column width="80%">
                        <styles.Text>
                            internal retro - first big discovery project, was tough client retro
                        </styles.Text>
                    </styles.Column>
                </styles.Table>
                { this.getNextStepsList() }
            </styles.Content>
        );
    }

    render() {
        return (
            <styles.Container>
                { this.getSidebar() }
                { this.getContent() }
            </styles.Container>
        );
    }
}