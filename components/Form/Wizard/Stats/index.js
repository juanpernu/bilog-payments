const Stats = ({ nextStep, previousStep, totalSteps, step }) => (
  <div>
    {step > 1 && <button onClick={previousStep}>Volver</button>}
    {step < totalSteps ? (
      <button onClick={nextStep}>Continuar</button>
    ) : (
      <button onClick={nextStep}>Enviar</button>
    )}
  </div>
);

export default Stats;
