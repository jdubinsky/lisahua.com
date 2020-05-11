import styled from "styled-components";

export const Modal = styled.div`
  background: #e5e5e5;
  display: flex;
  flex-direction: column;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100%;
  max-width: 100%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ModalOverlay = styled.div`
  top: 0;
  left: 0;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  opacity: 0.5;
`;

export const CloseButton = styled.div`
  cursor: pointer;
`;

export const ModalActions = styled.div`
  display: flex;
  align-self: flex-end;
`;

export const ScaledImage = styled.img`
  display: ${(props) => (props.isLoading ? "none" : "block")};
`;
