import React from "react";

const ArrowLeft = ({
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
    viewBox="0 0 24 24"
    fill={colorFill}
  >
    <path d="M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12-5.373-12-12-12-12 5.373-12 12zm7.58 0l5.988-5.995 1.414 1.416-4.574 4.579 4.574 4.59-1.414 1.416-5.988-6.006z" />
  </svg>
);

export default ArrowLeft;
