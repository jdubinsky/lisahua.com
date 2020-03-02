import { h, Component } from "preact";

import * as styles from "./styles";
import description from "./content.txt";

export default class Sidebar extends Component {
    render() {
        return (
            <styles.Sidebar>
                <styles.Title>
                    I'm Lisa,
                </styles.Title>
                <styles.Subtitle>
                    a UX designer from Toronto
                </styles.Subtitle>
                <styles.Text>
                    { description }
                </styles.Text>
                <styles.Subtext>
                    scroll
                </styles.Subtext>
                <styles.Header marginTop="150px">
                    experience & education
                </styles.Header>
                { this.getExperienceAndEducationTable() }
                <styles.BoldText marginTop="30px">
                    View full resume
                </styles.BoldText>
                <styles.Header marginTop="60px">
                    say hello
                </styles.Header>
                <styles.SmallText>
                    <a href="mailto:lisavhua@gmail.com">
                        lisavhua@gmail.com
                    </a>
                </styles.SmallText>
                <styles.Header marginTop="60px">
                    my dogs
                </styles.Header>
            </styles.Sidebar>
        );
    }

    getExperienceAndEducationTable() {
        return (
            <styles.TextTable>
                <styles.Row>
                    <styles.SmallText>
                        Crowdlinker
                    </styles.SmallText>
                    <styles.SmallText>
                        2018-present
                    </styles.SmallText>
                </styles.Row>
                <styles.Row marginTop="6px">
                    <styles.SmallText>
                        George Brown
                    </styles.SmallText>
                    <styles.SmallText>
                        2017-2018
                    </styles.SmallText>
                </styles.Row>
                <styles.Row marginTop="6px">
                    <styles.SmallText>
                        University of Toronto
                    </styles.SmallText>
                    <styles.SmallText>
                        2012-2016
                    </styles.SmallText>
                </styles.Row>
            </styles.TextTable>
        );
    }
}
