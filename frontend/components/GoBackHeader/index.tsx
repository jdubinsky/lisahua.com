import { h, FunctionComponent, Fragment, VNode } from "preact";
import { Link, useLocation } from "react-router-dom";

import ArrowlessIcon from "../../icons/Arrowless";

import * as styles from "./styles";

const GoBackHeader: FunctionComponent = (): VNode => {
  const location = useLocation();

  if (location.pathname === "/" || location.pathname === "/v2") {
    return <Fragment />;
  }

  return (
    <Fragment>
      <styles.HeaderContainer>
        <Link to="/">
          <styles.HeaderContent>
            <ArrowlessIcon />
            <styles.BoldText marginLeft="12px">back to all projects</styles.BoldText>
          </styles.HeaderContent>
        </Link>
      </styles.HeaderContainer>
      <styles.PushDiv />
    </Fragment>
  );
};

export default GoBackHeader;
