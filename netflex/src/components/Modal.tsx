import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const ModalBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 11;
`;

const ModalContent = styled.div`
  width: 100%;
  max-width: 900px;
  height: auto;
  max-height: 90%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${(props) => props.theme.bg};
  z-index: 12;
`;

const Modal = () => {
  const navigate = useNavigate();

  const closeModal = () => {
    navigate("/");
  };

  return (
    <ModalBox onClick={closeModal}>
      <ModalContent>modal</ModalContent>
    </ModalBox>
  );
};

export default Modal;
