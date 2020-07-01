import { h, Component } from "preact";
import { Link } from "react-router-dom";

import ArrowlessIcon from "../../icons/Arrowless";

import * as styles from "./styles";

export default class GoBackHeader extends Component {
  render() {
    return (
      <styles.GoBackHeader>
        <ArrowlessIcon />
        <styles.BoldText marginLeft="12px">
          <Link to="/">back to all projects</Link>
        </styles.BoldText>
      </styles.GoBackHeader>
    );
  }
}
