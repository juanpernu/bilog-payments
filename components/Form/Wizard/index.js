import StepWizard from "react-step-wizard";
import { Steps, Step } from "./Steps";

function Wizard() {
  const totalSteps = Steps.length;
  return (
    <StepWizard>
      {Steps.map((step, i) => {
        const stepNumber = i + 1;
        return (
          <Step
            question={step.question}
            field={step.field}
            step={stepNumber}
            totalSteps={totalSteps}
          />
        );
      })}
    </StepWizard>
  );
}

export default Wizard;
