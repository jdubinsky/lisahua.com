import { h, Component, Fragment } from "preact";
import { Link, useLocation } from "react-router-dom";

import ArrowlessIcon from "../../icons/Arrowless";

import * as styles from "./styles";

export default class GoBackHeader extends Component {
  render() {
    const location = useLocation();

    if (location.pathname === "/") {
      return null;
    }

    return (
      <Fragment>
        <styles.HeaderContainer>
          <Link to="/">
            <styles.HeaderContent>
              <ArrowlessIcon />
              <styles.BoldText marginLeft="12px">
                back to all projects
              </styles.BoldText>
            </styles.HeaderContent>
          </Link>
        </styles.HeaderContainer>
        <styles.PushDiv />
      </Fragment>
    );
  }
}
