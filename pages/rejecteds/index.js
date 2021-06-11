import { test } from '../../services/test';

const Rejecteds = ({ user, amount }) => {
  const onSubmitHandler = async () => {
    try {
      const data = await test();
      if (data) {
        console.log(data)
      };
    } catch (error) {
      console.log('error', error);
    }
  }
  return (
    <section id="login-page">
      <h2>Rejecteds</h2>
      <p>Hola {user}</p>
      <p>Usted debe abonar $ {amount}</p>
      <button onClick={onSubmitHandler}>Regularizar pago</button>
    </section>
  )
};

export async function getServerSideProps(req, res) {
  const { user, amount } = req.query;
  return { props: { user, amount } };
}

export default Rejecteds;
