import { h, Component } from "preact";

import Content from "../Content";
import Sidebar from "../Sidebar";

import * as styles from "./styles";

export default class Container extends Component {
    render() {
        return (
            <styles.Container>
                <Sidebar />
                <Content />
            </styles.Container>
        )
    }
}
