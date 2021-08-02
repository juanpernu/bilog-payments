import React from "react";

const ToggleButton = ({ onclick, children }) => {
  return (
    <button className="toggle-button" onClick={onclick}>
      {children}
    </button>
  );
}

export default ToggleButton;
