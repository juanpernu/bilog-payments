import StepWizard from "react-step-wizard";
import { Steps, Step } from "./Steps";
import Nav from "./Nav";

function Wizard() {
  const totalSteps = Steps.length;
  return (
    <StepWizard nav={<Nav />}>
      {Steps.map((step, i) => {
        const stepNumber = i + 1;
        return (
          <Step
            step={step}
            stepNumber={stepNumber}
            totalSteps={totalSteps}
          />
        );
      })}
    </StepWizard>
  );
}

export default Wizard;
