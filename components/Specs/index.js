import { Fragment } from "react";
import Video from "../Video";
import Value from "./value";

const Specs = ({ specs }) => {
  const { id, chars, price, video } = specs;
  return (
    <div className="specs-container">
      <div className="specs-details">
        <p className="copy">Características</p>
        {id != "default" ? (
          <h3 className="subtitle">Es la mejor para vos por que...</h3>
        ) : (
          <h3 className="subtitle">Todas las versiones incluyen...</h3>
        )}
        <ul>
          {chars.map((c) => (
            <li>{c}</li>
          ))}
        </ul>
      </div>
      <div className="specs-price">
        {price ? (
          <Fragment>
            <Value text="Pago inicial" price={price.initial} />
            <Value text="Suscripción mensual" price={price.month.simple} />
            <Value
              text="Total"
              className="total"
              price={price.initial + price.month.simple}
            />
          </Fragment>
        ) : (
          <Video url={video} id={id} />
        )}
      </div>
    </div>
  );
};

export default Specs;
