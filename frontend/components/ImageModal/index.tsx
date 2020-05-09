import { h, Component, Fragment } from "preact";
import { createPortal, createRef } from "preact/compat";

import CloseIcon from "../../icons/CloseIcon";

import * as styles from "./styles";

interface ImageModalProps {
  isVisible: boolean;
  onClose: () => void;
  imageUrl: string;
}

export default class ImageModal extends Component<
  ImageModalProps,
  {}
> {
  ref = createRef<HTMLImageElement>();

  static defaultProps = {
    isVisible: false,
  };

  setImageScale() {
    if (!this.ref.current) {
      return;
    }

    const browserWidth = window.innerWidth - 150;
    const browserHeight = window.innerHeight - 150;
    const imgWidth = this.ref.current.width;
    const imgHeight = this.ref.current.height;
    const scale = Math.min(browserWidth / imgWidth, browserHeight / imgHeight);
    const newWidth = scale * imgWidth;
    const newHeight = scale * imgHeight;
    this.ref.current.height = newHeight;
    this.ref.current.width = newWidth;
  }

  onLoad = () => {
    if (this.ref.current) {
      this.setImageScale();
    }
  };

  render() {
    if (!this.props.isVisible) {
      return null;
    }

    return createPortal(
      <Fragment>
        <styles.ModalOverlay />
        <styles.ModalContainer>
          <styles.ModalActions>
            <styles.CloseButton onClick={this.props.onClose}>
              <CloseIcon></CloseIcon>
            </styles.CloseButton>
          </styles.ModalActions>
          <styles.Modal>
            <styles.ScaledImage
              ref={this.ref}
              src={this.props.imageUrl}
              onLoad={this.onLoad}
            />
          </styles.Modal>
        </styles.ModalContainer>
      </Fragment>,
      document.body
    );
  }
}
