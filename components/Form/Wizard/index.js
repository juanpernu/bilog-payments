import React, { useState } from "react";
import { useRouter } from "next/router";
import StepWizard from "react-step-wizard";
import { Steps, Step } from "./Steps";
import Nav from "./Nav";
import { saveNewBilling } from "../../../services/pricingService";
import { setUrlVersions } from "../../../utils";
import initialState from "../../../content/userDataInitialState";

const Wizard = ({ onChange }) => {
  const router = useRouter();
  const totalSteps = Steps.length;
  const [userdata, setUserdata] = useState(initialState);
  const updateUserData = (key, value) =>
    setUserdata({
      ...userdata,
      [key]: value,
    });

  const submit = async () => {
    onChange();
    const data = await saveNewBilling(userdata);
    const url = setUrlVersions(data, userdata);
    router.push(url);
  };

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
};

export default Wizard;
