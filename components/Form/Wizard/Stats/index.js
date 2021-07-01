const Stats = ({ nextStep, previousStep, totalSteps, stepNumber }) => (
  <div className="step-stats">
    {stepNumber > 1 && <button onClick={previousStep}>Volver</button>}
    {stepNumber < totalSteps ? (
      <button onClick={nextStep}>Continuar</button>
    ) : (
      <button onClick={nextStep}>Enviar</button>
    )}
  </div>
);

export default Stats;
