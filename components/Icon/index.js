import React from "react";
import BackArrow from "./back-arrow";
import Tooltip from "./tooltip";
import Check from "./check";
import Video from "./video";
import Close from "./close";
import Control from "./control";

const icons = {
  back: BackArrow,
  tooltip: Tooltip,
  check: Check,
  video: Video,
  close: Close,
  control: Control,
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
