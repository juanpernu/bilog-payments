import React from 'react';
import Payments from './Payments';

const forms = {
  payments: Payments,
};

const Form = ({ type, className }) => {
  const Form = forms[type];
  return <Form className={className} />;
};

export default Form;
