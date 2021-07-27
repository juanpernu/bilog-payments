import React from "react";

const Check = ({
  width = 24,
  height = 24,
  colorFill = "#5697FA",
  colorStroke = "#fff",
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
    <g>
      <path
        d="M18 30C25.732 30 32 23.732 32 16C32 8.26801 25.732 2 18 2C10.268 2 4 8.26801 4 16C4 23.732 10.268 30 18 30Z"
        fill={colorFill}
      ></path>
      <path
        d="M13 16.3333L15.9167 19.25L22.1667 13"
        stroke={colorStroke}
        strokeWidth="2"
        strokeLinecap="round"
      ></path>
    </g>
  </svg>
);

export default Check;
