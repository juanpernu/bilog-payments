import Icon from "../Icon";

const Item = ({ text, icon }) => {
  return (
    <div className="addon-item">
      <Icon
        type={icon}
        colorStroke="#24B47E"
        className="addon-icon"
        width={28}
        height={28}
        colorFill="#D6FACF"
      />
      <p className="text">{text}</p>
    </div>
  );
};

export default Item;
