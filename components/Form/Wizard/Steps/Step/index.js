import { useState } from "react";
import Stats from "../../Stats";
import AnswerField from "../../AnswerFields";
import { useValidations } from "../../useValidation";

const Step = (props) => {
  const { step, stepNumber, totalSteps, update, submit, userdata } = props;
  const [errors, setErrors] = useState({});
  const nextStepHandler = () => {
    const errors = useValidations(userdata, stepNumber);
    if (!errors) {
      setErrors({});
      if (stepNumber < totalSteps) return props.nextStep();
      return submit();
    }
    setErrors(errors);
  };

  return (
    <div className="step-container">
      {step.map((stepItem, i) => {
        return (
          <div key={i} className="step-fields">
            <div className="step-question">
              <p className="subtitle">{stepItem.question}</p>
              {stepItem.hint && <p className="disclaimer">{stepItem.hint}</p>}
            </div>
            <div className="step-field">
              <AnswerField
                field={stepItem.field}
                fieldKey={stepItem.key}
                onChange={update}
                placeholder={stepItem.placeholder}
              />
              {errors[stepItem.key] && (
                <p className="error">{errors[stepItem.key]}</p>
              )}
            </div>
          </div>
        );
      })}
      <Stats
        stepNumber={stepNumber}
        totalSteps={totalSteps}
        {...props}
        nextStep={nextStepHandler}
      />
    </div>
  );
};

export default Step;
