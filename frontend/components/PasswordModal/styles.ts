import styled from "styled-components";

import { AvenirFontDiv, BeauFontDiv } from "../../text-styles";

export const AvenirText = styled(AvenirFontDiv)``;
export const BeauText = styled(BeauFontDiv)``;

export const ErrorText = styled(BeauText)`
  color: #d8000c;
`;

export const Modal = styled.div`
  background: #ebe9e4;
  display: flex;
  flex-direction: column;
  padding: 50px;
  border-radius: 10px;
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
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: fixed;
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

export const ModalContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SubmitButton = styled.button`
  cursor: pointer;
  padding: 5px;
`;

export const Input = styled.input`
  flex-grow: 1;
`;
