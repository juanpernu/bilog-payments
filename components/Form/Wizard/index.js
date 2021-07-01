import React, { useState } from "react";
import StepWizard from "react-step-wizard";
import { Steps, Step } from "./Steps";

function Wizard() {
  const totalSteps = Steps.length;
  const [userdata, setUserdata] = useState({});
  const updateUserData = (key, value) =>
    setUserdata({
      ...userdata,
      [key]: value,
    });

  const submit = () => console.log(userdata);

  return (
    <StepWizard>
      {Steps.map((step, i) => {
        const stepNumber = i + 1;
        return (
          <Step
            step={step}
            stepNumber={stepNumber}
            totalSteps={totalSteps}
            update={updateUserData}
            submit={submit}
          />
        );
      })}
    </StepWizard>
  );
}

export default Wizard;
