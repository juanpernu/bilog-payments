import React from "react";
import classNames from "classnames";

import Icon from "../Icon";
import { ModalContext } from "./context";

const Modal = ({
  isOpenModal,
  closeModal,
  openModal,
  title,
  children,
  strech,
}) => {
  const classes = classNames(
    "modal-container",
    isOpenModal ? "show-modal" : "",
    strech ? "strech" : ""
  );

  return (
    <div className={classes}>
      <div className="modal">
        <span onClick={closeModal}>
          <Icon className="close-button" type="close" />
        </span>
        <h3>{title}</h3>
        <ModalContext.Provider
          value={{
            isOpenForm: isOpenModal,
            openForm: openModal,
            closeForm: closeModal,
          }}
        >
          {isOpenModal && children}
        </ModalContext.Provider>
      </div>
      <div className="modal-bg" />
    </div>
  );
};

export default Modal;
