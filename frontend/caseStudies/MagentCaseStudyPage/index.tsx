import { h, Component } from "preact";
import { Link } from "react-router-dom";

import * as constants from "../../constants";
import ArrowlessIcon from "../../icons/Arrowless";

import * as styles from "./styles";

const description = `
Redesigning the experience of buying and training investigative forensic equipment.
`;

export default class MagnentCaseStudyPage extends Component {
    getProjectInfo() {
        return (
            <styles.Table>
                <styles.Column width="60%">
                    <styles.SmallHeader>
                        role
                    </styles.SmallHeader>
                    <styles.Text>
                        information architecture
                    </styles.Text>
                    <styles.Text>
                        user personas
                    </styles.Text>
                    <styles.Text>
                        journey mapping
                    </styles.Text>
                    <styles.Text>
                        wireframes
                    </styles.Text>
                    <styles.Text>
                        stakeholder interviews
                    </styles.Text>
                    <styles.Text>
                        user testing
                    </styles.Text>
                </styles.Column>
                <styles.Column width="40%">
                    <styles.SmallHeader>
                        project type
                    </styles.SmallHeader>
                    <styles.Text>
                        marketing
                    </styles.Text>
                    <styles.Text>
                        website
                    </styles.Text>
                    <styles.SmallHeader>
                        timeline
                    </styles.SmallHeader>
                    <styles.Text>
                        june - aug 2018
                    </styles.Text>
                </styles.Column>
            </styles.Table>
        );
    }

    getToolsInfo() {
        return (
            <styles.Column>
                <styles.SmallHeader>
                    tools
                </styles.SmallHeader>
                <styles.Text>
                    sketch
                </styles.Text>
                <styles.Text>
                    invision
                </styles.Text>
                <styles.Text>
                    highfive
                </styles.Text>
                <styles.Text>
                    skype for teams
                </styles.Text>
            </styles.Column>
        );
    }

    getCredits() {
        return (
            <styles.Column>
                <styles.SmallHeader>
                    credits
                </styles.SmallHeader>
                <styles.Text>
                    alison ma (product manager)
                </styles.Text>
                <styles.Text>
                    joshua van boxtel (lead wordpress developer)
                </styles.Text>
                <styles.Text>
                    rennie chun (lead visual designer)
                </styles.Text>
                <styles.Text>
                    lisa hua (UX designer)
                </styles.Text>
                <styles.Text>
                    justin damer (visual designer)
                </styles.Text>
            </styles.Column>
        );
    }

    render() {
        return (
            <styles.Container>
                <styles.SidebarContainer>
                    <styles.Title>
                        Magnent
                    </styles.Title>
                    <styles.Title marginBottom="40px">
                        Forensics
                    </styles.Title>
                    { description }
                    { this.getProjectInfo() }
                    { this.getToolsInfo() }
                    { this.getCredits() }
                </styles.SidebarContainer>
                <styles.Content>
                    <styles.CenteredTable>
                        <ArrowlessIcon />
                        <styles.BoldText marginLeft="12px">
                            <Link to="/">
                                back to all projects
                            </Link>
                        </styles.BoldText>
                    </styles.CenteredTable>
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
                    <styles.SmallHeader>
                        problem
                    </styles.SmallHeader>
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
                    <div>
                        <img src={constants.magnetHomeUrl} />
                    </div>
                </styles.Content>
            </styles.Container>
        );
    }
}