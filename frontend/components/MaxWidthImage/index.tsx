import { h, Component, Fragment } from "preact";

import ImageModal from "../ImageModal";

import isMobile from "../../is-mobile";
import useModal from "../../hooks/useModal";

import * as styles from "./styles";

interface MaxWidthImageProps {
  imageUrl: string;
  modalImageUrl?: string;
}

export default class MaxWitdthImage extends Component<MaxWidthImageProps> {
  render() {
    const { imageUrl, modalImageUrl } = this.props;

    if (isMobile() || !modalImageUrl) {
      return (
        <Fragment>
          <styles.MaxWidthImage src={imageUrl} />
        </Fragment>
      );
    }

    const { isVisible, toggle } = useModal();

    return (
      <Fragment>
        <styles.ClickableMaxWidthImage src={imageUrl} onClick={toggle} />
        <ImageModal
          imageUrl={modalImageUrl}
          isVisible={isVisible}
          onClose={toggle}
        />
      </Fragment>
    );
  }
}
