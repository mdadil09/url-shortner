/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Modal from "react-modal";
import close from "../assests/close.svg";

const customStyles = {
  content: {
    width: "544px",
    height: "463px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "16px",
    background: "var(--light-gohan, #FFF)",
    boxShadow:
      "0px 0px 1px 0px rgba(0, 0, 0, 0.20), 0px 0px 32px -8px rgba(0, 0, 0, 0.12), 0px 32px 32px -8px rgba(0, 0, 0, 0.08)",
  },
};

const UpdateModal = ({ modalIsOpen, setIsOpen, openModal }) => {
  const closeModal = (event) => {
    event.preventDefault();
    setIsOpen(false);
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
      portalClassName="modal"
    >
      <div className="modal-header">
        <div className="modal-header-text">Update Your Redirect URL</div>
        <button onClick={closeModal}>
          <img src={close} alt="close" />
        </button>
      </div>
      <div className="modal-content"></div>
    </Modal>
  );
};

export default UpdateModal;
