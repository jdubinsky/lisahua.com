import { h, Component, Fragment } from "preact";
import { createPortal, createRef } from "preact/compat";

import CloseIcon from "../../icons/CloseIcon";

import * as styles from "./styles";

interface PasswordModalProps {
  isVisible: boolean;
}

export default class PasswordModal extends Component<PasswordModalProps> {
  inputRef = createRef<HTMLInputElement>();

  onPasswordSubmit() {
    if (!this.inputRef.current) {
      return;
    }

    console.log(this.inputRef.current.value);
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
            <styles.CloseButton onClick={() => {}}>
              <CloseIcon></CloseIcon>
            </styles.CloseButton>
          </styles.ModalActions>
          <styles.Modal>
            Enter the password to view the case study
            <input ref={this.inputRef} />
            <button onClick={this.onPasswordSubmit}>Submit</button>
          </styles.Modal>
        </styles.ModalContainer>
      </Fragment>,
      document.body
    );
  }
}
