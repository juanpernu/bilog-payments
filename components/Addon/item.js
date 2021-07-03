import Icon from "../Icon";

const Item = ({ text, icon }) => {
  return (
    <div className="addon-item">
      <Icon type={icon} className="addon-icon" width={28} height={28} />
      <p className="text">{text}</p>
    </div>
  );
};

export default Item;
