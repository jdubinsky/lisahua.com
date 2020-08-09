import { h, Component, Fragment, VNode } from "preact";
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

export default class PasswordModal extends Component<PasswordModalProps, PasswordModalState> {
  inputRef = createRef<HTMLInputElement>();

  state = {
    passwordError: false,
  };

  onPasswordSubmit = async (): Promise<void> => {
    if (!this.inputRef.current) {
      return;
    }

    const passwordAttempt = this.inputRef.current.value;
    const { path } = this.props;
    let response: Response;

    try {
      response = await fetch(`/auth/${path}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password: passwordAttempt }),
      });
    } catch (err) {
      console.error(err);
      this.setState({ passwordError: true });
      return;
    }

    const respJson = await response.json();
    if (respJson.authResult === true) {
      this.props.onPasswordSuccess();
      this.setState({ passwordError: false });
    } else {
      this.setState({ passwordError: true });
    }
  };

  onPasswordSubmitKeyPress = async (event: KeyboardEvent): Promise<void> => {
    if (event.key === "Enter") {
      this.onPasswordSubmit();
    }
  };

  getErrorText(): VNode | null {
    if (!this.state.passwordError) {
      return null;
    }

    return <styles.ErrorText marginBottom="30px">Incorrect password, please try again.</styles.ErrorText>;
  }

  render(): VNode | null {
    if (!this.props.isVisible) {
      return null;
    }

    return createPortal(
      <Fragment>
        <styles.ModalOverlay />
        <styles.ModalContainer>
          <styles.ModalActions>
            <styles.CloseButton onClick={this.props.onGoBack}>
              <CloseIcon />
            </styles.CloseButton>
          </styles.ModalActions>
          <styles.Modal>
            <styles.BeauText marginBottom="30px">Enter the password to view the case study</styles.BeauText>
            {this.getErrorText()}
            <styles.ModalContent>
              <styles.Input ref={this.inputRef} onKeyPress={this.onPasswordSubmitKeyPress} type="password" />
              <styles.SubmitButton onClick={this.onPasswordSubmit} onKeyPress={this.onPasswordSubmitKeyPress}>
                <styles.AvenirText>Submit</styles.AvenirText>
              </styles.SubmitButton>
            </styles.ModalContent>
          </styles.Modal>
        </styles.ModalContainer>
      </Fragment>,
      document.body,
    );
  }
}
