import { Button } from "../Buttons";

const Payments = () => {
  return (
    <>
      <form id="payments" className="payments-form">
        <div className="block">
          <label>Email</label>
          <input className="checkout-input input" />
        </div>
        <div className="block">
          <label>Información de la tarjeta</label>
          <input
            placeholder="1234 1234 1234 1234"
            className="top-card-input input"
          />
          <div className="doble-input">
            <input placeholder="MM/YY" className="left-card-input input" />
            <input placeholder="CVV" className="right-card-input input" />
          </div>
        </div>
        <div className="block">
          <label>Nombre en la tarjeta</label>
          <input className="checkout-input input" />
        </div>
        <div className="block">
          <label>Datos de facturación</label>
          <input className="top-card-input input" placeholder="País" />
          <input className="input" placeholder="Dirección 1" />
          <input className="input" placeholder="Dirección 2" />
          <div className="doble-input">
            <input placeholder="Código postal" className="input" />
            <input placeholder="Ciudad" className="input" />
          </div>
          <input placeholder="Provincia" className="bottom-card-input input" />
        </div>
        <Button
          className="pay-button"
          text="Suscribirse"
          onClick={() => handleOnClick(card.plan)}
        />
      </form>
    </>
  );
};

export default Payments;
