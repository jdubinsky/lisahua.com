import { h, Component, Fragment } from "preact";
import { createPortal } from "preact/compat";

import CloseIcon from "../../icons/CloseIcon";

import * as styles from "./styles";

interface ImageModalProps {
    isVisible: boolean;
    onClose: () => void;
    imageUrl: string;
}

export default class ImageModal extends Component<ImageModalProps, {}> {
    static defaultProps = {
        isVisible: false
    };

    render() {
        if (!this.props.isVisible) {
            return null;
        }

        return createPortal(
            <Fragment>
                <styles.ModalOverlay />
                <styles.ModalContainer>
                    <styles.Modal>
                        <styles.ModalActions>
                            <styles.CloseButton onClick={this.props.onClose}>
                                <CloseIcon></CloseIcon>
                            </styles.CloseButton>
                        </styles.ModalActions>
                        <img src={this.props.imageUrl} />
                    </styles.Modal>
                </styles.ModalContainer>
            </Fragment>,
            document.body
        );
    }
}
