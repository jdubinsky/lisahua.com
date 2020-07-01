import { h, FunctionComponent, Fragment, VNode } from "preact";

import ImageModal from "../ImageModal";

import useModal from "../../hooks/useModal";

import * as styles from "./styles";

interface MaxWidthImageProps {
  imageUrl: string;
  modalImageUrl?: string;
}

const MaxWidthImage: FunctionComponent<MaxWidthImageProps> = (props): VNode => {
  const { isVisible, close, open } = useModal();
  const { imageUrl, modalImageUrl } = props;

  if (!modalImageUrl) {
    return (
      <Fragment>
        <styles.MaxWidthImage src={imageUrl} />
      </Fragment>
    );
  }

  return (
    <Fragment>
      <styles.ClickableMaxWidthImage src={imageUrl} onClick={open} />
      <ImageModal imageUrl={modalImageUrl} isVisible={isVisible} onClose={close} />
    </Fragment>
  );
};

export default MaxWidthImage;
