import { h, Component, Fragment } from "preact";
import { createPortal, createRef } from "preact/compat";

import CloseIcon from "../../icons/CloseIcon";

import * as styles from "./styles";

interface ImageModalProps {
  isVisible: boolean;
  onClose: () => void;
  imageUrl: string;
}

interface ImageModalState {
  scale: number;
  hasLoaded: boolean;
}

export default class ImageModal extends Component<
  ImageModalProps,
  ImageModalState
> {
  ref = createRef<HTMLImageElement>();

  static defaultProps = {
    isVisible: false,
  };

  state = {
    scale: 1,
    hasLoaded: false,
  };

  setImageScale() {
    if (!this.ref.current || this.state.hasLoaded) {
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
    this.setState({ hasLoaded: true });
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
              scale={this.state.scale}
              onLoad={this.onLoad}
            />
          </styles.Modal>
        </styles.ModalContainer>
      </Fragment>,
      document.body
    );
  }
}
