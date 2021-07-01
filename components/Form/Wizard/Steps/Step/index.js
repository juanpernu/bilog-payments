import Stats from "../../Stats";
import AnswerField from "../../AnswerFields";

const Step = (props) => {
  const { step, stepNumber, totalSteps, update, submit } = props;
  return (
    <div className="step-container">
      {step.map((stepItem, i) => {
        return (
          <div key={i} className="step-fields">
            <p>{stepItem.question}</p>
            <AnswerField
              field={stepItem.field}
              fieldKey={stepItem.key}
              onChange={update}
            />
          </div>
        );
      })}
      <Stats
        stepNumber={stepNumber}
        submit={submit}
        totalSteps={totalSteps}
        {...props}
      />
    </div>
  );
};

export default Step;
