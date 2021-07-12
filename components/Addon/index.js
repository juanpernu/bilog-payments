import Item from "./item";
import Icon from "../Icon";

const Addon = ({ title, description, icon }) => {
  return (
    <div className="addon">
      <span className="addon-container">
        <Icon
          type={icon}
          width={32}
          height={32}
          className="icon"
          colorFill="#007aff"
        />
        <h3 className="title">{title}</h3>
      </span>
      <h3 className="addon-description">{description}</h3>
      <div className="addon-content">
        <div className="items-container">
          <Item
            icon="check"
            text="Manejá y administrá todos los turnos de tu consultorio con la agenda de turnos diarias."
          />
          <Item
            icon="check"
            text="Manejá y administrá todos los turnos de tu consultorio con la agenda de turnos diarias."
          />
          <Item
            icon="check"
            text="Manejá y administrá todos los turnos de tu consultorio con la agenda de turnos diarias."
          />
        </div>
        <div className="pricing-container">
          <p className="annotation">$ 1.000</p>
        </div>
      </div>
    </div>
  );
};

export default Addon;
