import { h, Component, Fragment } from "preact";
import { createPortal, createRef } from "preact/compat";

import CloseIcon from "../../icons/CloseIcon";

import * as styles from "./styles";

interface PasswordModalProps {
  isVisible: boolean;
  path: string;
  onPasswordSuccess: () => void;
  onGoBack: () => void;
}

interface PasswordModalState {
  passwordError: boolean;
}

export default class PasswordModal extends Component<
  PasswordModalProps,
  PasswordModalState
> {
  inputRef = createRef<HTMLInputElement>();

  state = {
    passwordError: false,
  };

  onPasswordSubmit = async () => {
    if (!this.inputRef.current) {
      return;
    }

    const passwordAttempt = this.inputRef.current.value;
    const { path } = this.props;
    const response = await fetch(`http://localhost:9001/auth/${path}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password: passwordAttempt }),
    });
    const respJson = await response.json();
    if (respJson.authResult === true) {
      this.props.onPasswordSuccess();
      this.setState({ passwordError: false });
    } else {
      this.setState({ passwordError: true });
    }
  };

  onPasswordSubmitKeyPress = async (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      this.onPasswordSubmit();
    }
  };

  getErrorText() {
    if (!this.state.passwordError) {
      return null;
    }

    return (
      <styles.ErrorText marginBottom="30px">
        Incorrect password, please try again.
      </styles.ErrorText>
    );
  }

  render() {
    if (!this.props.isVisible) {
      return null;
    }

    return createPortal(
      <Fragment>
        <styles.ModalOverlay />
        <styles.ModalContainer>
          <styles.ModalActions>
            <styles.CloseButton onClick={this.props.onGoBack}>
              <CloseIcon></CloseIcon>
            </styles.CloseButton>
          </styles.ModalActions>
          <styles.Modal>
            <styles.BeauText marginBottom="30px">
              Enter the password to view the case study
            </styles.BeauText>
            {this.getErrorText()}
            <styles.ModalContent>
              <styles.Input
                ref={this.inputRef}
                onKeyPress={this.onPasswordSubmitKeyPress}
                type="password"
              />
              <styles.SubmitButton
                onClick={this.onPasswordSubmit}
                onKeyPress={this.onPasswordSubmitKeyPress}
              >
                <styles.AvenirText>Submit</styles.AvenirText>
              </styles.SubmitButton>
            </styles.ModalContent>
          </styles.Modal>
        </styles.ModalContainer>
      </Fragment>,
      document.body
    );
  }
}
