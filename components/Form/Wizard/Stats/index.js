import Button from "../../../Button";

const Stats = ({ nextStep, previousStep, totalSteps, stepNumber, submit }) => (
  <div className="step-stats">
    {stepNumber > 1 && <Button onClick={previousStep}>Volver</Button>}
    {stepNumber < totalSteps ? (
      <Button onClick={nextStep}>Continuar</Button>
    ) : (
      <Button onClick={submit}>Enviar</Button>
    )}
  </div>
);

export default Stats;
