const Stats = ({ nextStep, previousStep, totalSteps, stepNumber, submit }) => {
  const submitHandler = () => {
    nextStep();
    submit();
  };
  return (
    <div className="step-stats">
      {stepNumber > 1 && <button onClick={previousStep}>Volver</button>}
      {stepNumber < totalSteps ? (
        <button onClick={nextStep}>Continuar</button>
      ) : (
        <button onClick={submitHandler}>Enviar</button>
      )}
    </div>
  );
};

export default Stats;
