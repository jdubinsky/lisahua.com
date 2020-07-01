import { h, FunctionComponent, Fragment, VNode } from "preact";
import { createPortal, createRef } from "preact/compat";

import CloseIcon from "../../icons/CloseIcon";
import useEscape from "../../hooks/useEscape";

import * as styles from "./styles";

interface ImageModalProps {
  isVisible: boolean;
  onClose: () => void;
  imageUrl: string;
}

const ImageModal: FunctionComponent<ImageModalProps> = ({ isVisible = false, onClose, imageUrl }): VNode => {
  const imageRef = createRef<HTMLImageElement>();

  const setImageScale = () => {
    const image = imageRef.current;
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
    document.body.style.overflow = "hidden";
  };

  const onCloseHandler = () => {
    document.body.style.overflow = "unset";
    onClose();
  };

  const onLoad = () => {
    setImageScale();
  };

  useEscape(() => {
    onCloseHandler();
  });

  if (!isVisible) {
    return <Fragment />;
  }

  return createPortal(
    <Fragment>
      <styles.ModalOverlay />
      <styles.ModalContainer>
        <styles.ModalActions>
          <styles.CloseButton onClick={onCloseHandler}>
            <CloseIcon />
          </styles.CloseButton>
        </styles.ModalActions>
        <styles.Modal>
          <img ref={imageRef} src={imageUrl} onLoad={onLoad} />
        </styles.Modal>
      </styles.ModalContainer>
    </Fragment>,
    document.body,
  );
};

export default ImageModal;
