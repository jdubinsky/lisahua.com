import { h, FunctionComponent, Fragment, VNode } from "preact";
import { useState } from "preact/hooks";
import { useHistory } from "react-router-dom";

import PasswordModal from "../PasswordModal";

interface PasswordProtectedPageProps {
  path: string;
}

const PasswordProtectedPage: FunctionComponent<PasswordProtectedPageProps> = (props): VNode => {
  const [authorized, setAuthorized] = useState(false);
  const history = useHistory();

  const returnToHomepage = () => {
    history.push("/");
  };

  const onSuccess = () => {
    setAuthorized(true);
  };

  if (authorized) {
    return <Fragment>{props.children}</Fragment>;
  }

  const { path } = props;

  return <PasswordModal isVisible={true} path={path} onGoBack={returnToHomepage} onPasswordSuccess={onSuccess} />;
};

export default PasswordProtectedPage;
