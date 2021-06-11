import React from 'react';
import Payments from './payments';

const forms = {
  payments: Payments,
};

const Form = ({ type, className }) => {
  const Form = forms[type];
  return <Form className={className} />;
};

export default Form;
