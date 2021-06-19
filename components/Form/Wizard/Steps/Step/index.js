import Stats from "../../Stats";
import AnswerField from "../../AnswerFields";

const Step = (props) => {
  const { question, step, field, totalSteps } = props;
  return (
    <div>
      <p>{question}</p>
      {AnswerField[field]}
      <Stats step={step} totalSteps={totalSteps} {...props} />
    </div>
  );
};

export default Step;
