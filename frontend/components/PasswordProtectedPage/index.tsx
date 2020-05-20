import { h, Component } from "preact";
import { useHistory } from "react-router-dom";

import PasswordModal from "../PasswordModal";

interface PasswordProtectedPageProps {
  path: string;
}

interface PasswordProectedPageState {
  authorized: boolean;
}

export default class PasswordProtectedPage extends Component<
  PasswordProtectedPageProps,
  PasswordProectedPageState
> {
  state = {
    authorized: false,
  };

  returnToHomepage = () => {
    const history = useHistory();
    history.push("/");
  };

  onSuccess = () => {
    this.setState({ authorized: true });
  };

  render() {
    if (this.state.authorized) {
      return this.props.children;
    }

    return (
      <PasswordModal
        isVisible={true}
        path={this.props.path}
        onGoBack={this.returnToHomepage}
        onPasswordSuccess={this.onSuccess}
      />
    );
  }
}
