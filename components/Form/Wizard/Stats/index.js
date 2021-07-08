const Stats = ({ nextStep, previousStep, totalSteps, stepNumber, submit }) => (
  <div className="step-stats">
    {stepNumber > 1 && <button onClick={previousStep}>Volver</button>}
    {stepNumber < totalSteps ? (
      <button onClick={nextStep}>Continuar</button>
    ) : (
      <button onClick={submit}>Enviar</button>
    )}
  </div>
);

export default Stats;
