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
  hasResized: boolean;
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
    hasResized: false,
  };

  setImageScale() {
    const image = this.ref.current;
    if (!image) {
      return;
    }

    const browserHeight = window.innerHeight;
    const maxHeight = browserHeight - browserHeight * 0.1;
    const browserWidth = window.innerWidth;
    const maxWidth = browserWidth - browserWidth * 0.1;
    let newHeight: number;
    let newWidth: number;

    if (image.naturalWidth > image.naturalHeight) {
      newWidth = Math.min(maxWidth, image.naturalWidth);
      const scale = newWidth / image.naturalWidth;
      newHeight = scale * image.clientHeight;
      if (newHeight > maxHeight) {
        const widthScale = maxHeight / newHeight;
        newHeight = maxHeight;
        newWidth = newWidth * widthScale;
      }
    } else {
      newHeight = Math.min(maxHeight, image.naturalHeight);
      const scale = newHeight / image.naturalHeight;
      newWidth = scale * image.clientWidth;
      if (newWidth > maxWidth) {
        const heightScale = maxWidth / newWidth;
        newWidth = maxWidth;
        newHeight = newHeight * heightScale;
      }
    }

    image.height = newHeight;
    image.width = newWidth;

    this.setState({
      hasResized: true,
    });
  }

  onLoad = () => {
    this.setImageScale();
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
            <img
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
