import Item from "./item";
import Icon from "../Icon";

const Addon = ({ title, description, icon, items, price }) => {
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
          {items.map((i) => (
            <Item icon={i.icon} text={i.text} />
          ))}
        </div>
        <div className="pricing-container">
          <p className="annotation">$ {price}</p>
        </div>
      </div>
    </div>
  );
};

export default Addon;
