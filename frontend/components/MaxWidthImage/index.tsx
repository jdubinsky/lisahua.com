import { h, FunctionComponent, Fragment, VNode } from "preact";

import ImageModal from "../ImageModal";

import useModal from "../../hooks/useModal";

import * as styles from "./styles";

interface MaxWidthImageProps {
  imageUrl: string;
  modalImageUrl?: string;
  maxWidth?: string;
}

const MaxWidthImage: FunctionComponent<MaxWidthImageProps> = ({
  imageUrl,
  modalImageUrl,
  maxWidth = "100%",
}): VNode => {
  const { isVisible, close, open } = useModal();

  if (!modalImageUrl || modalImageUrl === undefined) {
    return (
      <Fragment>
        <styles.MaxWidthImage src={imageUrl} maxWidth={maxWidth} />
      </Fragment>
    );
  }

  return (
    <Fragment>
      <styles.ClickableMaxWidthImage src={imageUrl} onClick={open} maxWidth={maxWidth} />
      <ImageModal imageUrl={modalImageUrl} isVisible={isVisible} onClose={close} />
    </Fragment>
  );
};

export default MaxWidthImage;
