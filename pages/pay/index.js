import Icon from '../../components/Icon';
import Form from '../../components/Form';

const Pay = ({ version, value }) => {
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
    <section className="checkout">
      <div className="checkout-wrapper preview">
        <a className="back" href="/">
          <Icon className="icon" type="back" colorFill="#fff" />
          <p className="back-text">Volver a planes de suscripción</p>
        </a>
        <div className="summary">
          <p className="text text-medium">Suscribirse a la versión <span className="version">{version}</span></p>
          <div className="price-container">
            <p className="price">${value}</p>
            <p>por mes</p>
          </div>
        </div>
        <div className="summary">
          <div className="price-container space-btw">
            <p className="text version">{version}</p>
            <p className="text text-medium">${value}.00</p>
          </div>
          <p className="text text-small">por mes</p>
        </div>
        <div className="summary space-btw">
        <div className="price-container space-btw">
            <p className="text version">Total</p>
            <p className="text text-medium">${value}.00</p>
          </div>
        </div>
      </div>
      <div className="checkout-wrapper pay">
        <Form type="payments" />
        <p className="legal">AL confirmar tu suscripción, estas permitiendo que Bilog Subscription Payments emita un cargo a tu tarjeta por este pago y futuros pagos de acuerdo a los Términos y Condiciones.</p>
      </div>
    </section>
  )
};

export async function getServerSideProps(req) {
  const { version, value } = req.query;
  return { props: { version, value } };
}

export default Pay;
