import { h, Component } from "preact";

import * as styles from "./styles";

export default class Content extends Component {
    render() {
        return (
            <styles.Content>
                <styles.CaseStudyContainer>
                    <styles.Header>
                        Magnet Forensics
                    </styles.Header>
                    <styles.Text marginTop="12px">
                        Redesigning the experience of training forensic investigators.
                    </styles.Text>
                    <styles.CallToActionText marginTop="50px">
                        explore case study
                    </styles.CallToActionText>
                    <styles.ImageWrapper>
                        <img src="magnet.png" />
                    </styles.ImageWrapper>
                </styles.CaseStudyContainer>
            </styles.Content>
        );
    }
}
