import React from 'react';
import BackArrow from './back-arrow';
import Agenda from './Agenda';
import Person from './Person';
import Account from './Account';
import Cloud from './Cloud';
import Chart from './Chart';
import Money from './Money';

const icons = {
  back: BackArrow,
  agenda: Agenda,
  person: Person,
  account: Account,
  cloud: Cloud,
  chart: Chart,
  money: Money,
};

const GeneratedIcon = ({ type, width, height, colorStroke, colorFill, className }) => {
  const Icon = icons[type];
  return <Icon
    width={width}
    height={height}
    colorStroke={colorStroke}
    colorFill={colorFill}
    className={className}
  />;
};

export default GeneratedIcon;
