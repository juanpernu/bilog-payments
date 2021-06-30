import React, { Fragment } from "react";

const Plan = ({ plan }) => (
  <Fragment>
    <h3 className="subtitle">La mejor versión que se adapta a tu negocio</h3>
    <h2 className="title">es la Versión {plan}</h2>
  </Fragment>
);

export default Plan;
