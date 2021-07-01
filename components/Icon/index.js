import React from "react";
import BackArrow from "./back-arrow";
import Tooltip from "./tooltip";

const icons = {
  back: BackArrow,
  tooltip: Tooltip,
};

const GeneratedIcon = ({
  type,
  width,
  height,
  colorStroke,
  colorFill,
  className,
}) => {
  const Icon = icons[type];
  return (
    <Icon
      width={width}
      height={height}
      colorStroke={colorStroke}
      colorFill={colorFill}
      className={className}
    />
  );
};

export default GeneratedIcon;
