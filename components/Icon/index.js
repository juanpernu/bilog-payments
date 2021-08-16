import React from "react";

import Admin from "./admin";
import ArrowRight from "./arrow-right";
import ArrowLeft from "./arrow-left";
import BackArrow from "./arrow-back";
import Alert from "./alert";
import Budget from "./budget";
import Billing from "./billing";
import Bank from "./bank";
import Bars from "./bars";
import Check from "./check";
import Close from "./close";
import Control from "./control";
import Cross from "./cross";
import Cloud from "./cloud";
import Debts from "./debts";
import Devices from "./devices";
import Email from "./email";
import GeneralStatistics from "./general-statistics";
import Images from "./images";
import Laboratory from "./laboratory";
import MedicalInsurance from "./medical-insurance";
import Notes from "./notes";
import Professionals from "./professionals";
import Send from "./send";
import Sms from "./sms";
import Star from "./star";
import Stock from "./stock";
import Schedule from "./schedule";
import Statistics from "./statistics";
import Tooltip from "./tooltip";
import Video from "./video";
import WeekSchedule from "./week-schedule";
import Wand from "./wand";

const icons = {
  admin: Admin,
  alert: Alert,
  back: BackArrow,
  arrowright: ArrowRight,
  arrowleft: ArrowLeft,
  bank: Bank,
  bars: Bars,
  budget: Budget,
  billing: Billing,
  check: Check,
  close: Close,
  cloud: Cloud,
  control: Control,
  cross: Cross,
  debts: Debts,
  devices: Devices,
  email: Email,
  images: Images,
  laboratory: Laboratory,
  notes: Notes,
  wand: Wand,
  send: Send,
  stock: Stock,
  star: Star,
  sms: Sms,
  schedule: Schedule,
  statistics: Statistics,
  generalstatistics: GeneralStatistics,
  professionals: Professionals,
  tooltip: Tooltip,
  video: Video,
  medicalinsurance: MedicalInsurance,
  weekschedule: WeekSchedule,
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
