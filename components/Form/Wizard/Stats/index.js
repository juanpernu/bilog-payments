import { Button } from "../../../Buttons";

const Stats = ({ nextStep, previousStep, totalSteps, stepNumber, submit }) => {
  const submitHandler = () => {
    nextStep();
    submit();
  };
  return (
    <div className="step-stats">
      {stepNumber > 1 && <Button onClick={previousStep}>Volver</Button>}
      {stepNumber < totalSteps ? (
        <Button onClick={nextStep}>Continuar</Button>
      ) : (
        <Button onClick={submitHandler}>Enviar</Button>
      )}
    </div>
  );
};

export default Stats;
