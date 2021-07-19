import Item from "./item";
import Icon from "../Icon";

const Addon = ({ title, description, icon, items, price, color }) => {
  return (
    <div className="addon">
      <span className="addon-container">
        <Icon
          type={icon}
          width={28}
          height={28}
          className="icon"
          colorFill={color}
        />
        <h3 className="title" style={{ color: color }}>
          {title}
        </h3>
      </span>
      <h3 className="addon-description">{description}</h3>
      <div className="addon-content">
        <div className="items-container">
          {items.map((i) => (
            <Item icon={i.icon} text={i.text} />
          ))}
        </div>
        <div className="pricing-container">
          <p className="annotation">$ {price}.-</p>
          <p className="disclaimer">pago de única vez</p>
        </div>
      </div>
    </div>
  );
};

export default Addon;
