import React from "react";

const Bars = ({
  width = 24,
  height = 24,
  colorFill = "#202020",
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
    <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
  </svg>
);

export default Bars;
