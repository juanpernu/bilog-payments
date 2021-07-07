import Stats from "../../Stats";
import AnswerField from "../../AnswerFields";

const Step = (props) => {
  const { step, stepNumber, totalSteps } = props;
  return (
    <div className="step-container">
      {step.map((stepItem, i) => {
        return (
          <div key={i} className="step-fields">
            <p className="step-question">{stepItem.question}</p>
            {AnswerField[stepItem.field]}
          </div>
        );
      })}
      <Stats stepNumber={stepNumber} totalSteps={totalSteps} {...props} />
    </div>
  );
};

export default Step;
