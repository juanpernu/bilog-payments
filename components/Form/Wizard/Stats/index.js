import { Button } from "../../../Buttons";

const Stats = ({ nextStep, previousStep, totalSteps, stepNumber }) => {
  return (
    <div className="step-stats">
      {stepNumber > 1 && <Button onClick={previousStep}>Volver</Button>}
      {
        <Button onClick={nextStep}>
          {stepNumber < totalSteps ? "Continuar" : "Enviar"}
        </Button>
      }
    </div>
  );
};

export default Stats;
