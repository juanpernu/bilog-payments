const Rejecteds = ({ user, amount }) => {
  return (
    <section id="login-page">
      <h2>Rejecteds</h2>
      <p>Hola {user}</p>
      <p>Usted debe abonar $ {amount}</p>
      <button onClick={() => console.log("hola")}>Regularizar pago</button>
    </section>
  );
};

export async function getServerSideProps(req, res) {
  const { user, amount } = req.query;
  return { props: { user, amount } };
}

export default Rejecteds;
