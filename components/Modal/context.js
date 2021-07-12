import React from "react";

export const ModalContext = React.createContext({
  isOpenForm: false,
  openForm: () => null,
  closeForm: () => null,
});
