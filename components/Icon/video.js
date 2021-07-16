import React from "react";

const Video = ({
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
    viewBox="-10 -6 36 36"
    fill={colorFill}
  >
    <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3 17v-10l9 5.146-9 4.854z" />
  </svg>
);

export default Video;
