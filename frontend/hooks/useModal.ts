import { useState } from "preact/hooks";

interface ModalHook {
  isVisible: boolean;
  toggle: () => void;
  close: () => void;
  open: () => void;
}

const useModal = (): ModalHook => {
  const [isVisible, setIsVisible] = useState(false);

  const toggle = () => {
    setIsVisible(!isVisible);
  };

  const close = () => {
    setIsVisible(false);
  };

  const open = () => {
    setIsVisible(true);
  };

  return {
    isVisible,
    close,
    open,
    toggle,
  };
};

export default useModal;
