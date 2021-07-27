import React, { useState } from "react";
import StepWizard from "react-step-wizard";
import { Steps, Step } from "./Steps";
import Nav from "./Nav";
import { saveNewBilling } from "../../../services/pricingService";
import initialState from "../../../content/userDataInitialState";

function Wizard() {
  const totalSteps = Steps.length;
  const [userdata, setUserdata] = useState(initialState);
  const updateUserData = (key, value) =>
    setUserdata({
      ...userdata,
      [key]: value,
    });

  const submit = () => saveNewBilling(userdata);

  return (
    <StepWizard nav={<Nav />}>
      {Steps.map((step, i) => {
        const stepNumber = i + 1;
        return (
          <Step
            key={i}
            step={step}
            stepNumber={stepNumber}
            totalSteps={totalSteps}
            update={updateUserData}
            submit={submit}
            userdata={userdata}
          />
        );
      })}
    </StepWizard>
  );
}

export default Wizard;
