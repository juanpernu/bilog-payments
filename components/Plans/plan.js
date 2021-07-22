import React, { Fragment } from "react";
import { formatVersion } from "../../utils";

const Plan = ({ plan }) => (
  <Fragment>
    <h3 className="subtitle">La versión que mejor se adapta a tu negocio</h3>
    <h2 className="title">
      es la Versión <span className="plan">{formatVersion(plan)}</span>
    </h2>
  </Fragment>
);

export default Plan;
