import { useState, useEffect } from "react";
import Icon from "../Icon";

const AlwaysOnItem = ({
  addKey,
  title,
  description,
  icon,
  price,
  color,
  onChange,
}) => {
  const [position, setPosition] = useState(0);
  const [selected, setSelected] = useState(false);
  useEffect(() => {
    if (selected) onChange(addKey, price[position].price);
    if (!selected) onChange(addKey, false);
  }, [selected]);

  const decreasePosition = () => {
    if (position > 0) setPosition(position - 1);
    if (selected && position > 0) onChange(addKey, price[position - 1].price);
  };

  const increasePosition = () => {
    if (position === 2) return;
    setPosition(position + 1);
    if (selected) onChange(addKey, price[position + 1].price);
  };

  return (
    <div className="alwayson-addon">
      <div className="wrapper">
        <span className="addon-container">
          <Icon
            type={icon}
            width={28}
            height={28}
            className="icon"
            colorFill="#077DF7"
          />
          <h3 className="title" style={{ color: color }}>
            {title}
          </h3>
        </span>
        <h3 className="addon-description">{description}</h3>
        <div className="addon-content">
          <div className="actions-container">
            <p className="disclaimer">Cantidad del pack</p>
            <div className="actions">
              <span className="arrow-container" onClick={decreasePosition}>
                <Icon
                  type="arrowleft"
                  width={22}
                  height={22}
                  className="icon"
                />
              </span>
              <span className="selection">{price[position].quantity}</span>
              <span className="arrow-container" onClick={increasePosition}>
                <Icon
                  type="arrowright"
                  width={22}
                  height={22}
                  className="icon"
                />
              </span>
              <span className="arrow-container">
                <div className="arrow-left" />
              </span>
            </div>
          </div>
          <div className="pricing-container">
            <p className="disclaimer">Suscripción mensual de</p>
            <p className={`annotation${selected ? " selected" : ""}`}>
              $ {price[position].price}.-
            </p>
          </div>
        </div>
      </div>
      <div
        className="suscribe-container"
        onClick={() => setSelected(!selected)}
      >
        <p>Quiero contratarlo</p>
      </div>
    </div>
  );
};

export default AlwaysOnItem;
