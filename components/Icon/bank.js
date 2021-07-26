import React from "react";

const Bank = ({
  width = 24,
  height = 24,
  colorFill = "#5697FA",
  className,
}) => (
  <svg
    className={className}
    width={width}
    height={height}
    fillRule="evenodd"
    clipRule="evenodd"
    viewBox="0 0 36 36"
    fill={colorFill}
  >
    <path d="M7 21h-4v-11h4v11zm7-11h-4v11h4v-11zm7 0h-4v11h4v-11zm2 12h-22v2h22v-2zm-23-13h24l-12-9-12 9z" />
  </svg>
);

export default Bank;
