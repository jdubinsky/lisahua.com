import styled from "styled-components";

export const Modal = styled.div`
  padding: 4rem;
  display: flex;
  flex-direction: column;
`;

export const ModalContainer = styled.div`
  max-height: 100%;
  max-width: 100%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);;
`;

export const ModalOverlay = styled.div`
  top: 0;
  left: 0;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  opacity: .5;
`;

export const CloseButton = styled.button`
  cursor: pointer;
`;

export const ModalActions = styled.div`
  display: flex;
  align-self: flex-end;
`;
