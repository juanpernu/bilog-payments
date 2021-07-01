import Icon from "../Icon";

const Value = ({ text, price, tooltip, tooltipText, className }) => {
  return (
    <div className="price-wrapper">
      <p className="copy">{text}</p>
      <p className={`price-value ${className}`}>
        $ {price}
        <span className="decimals">,00</span>
        {tooltip && (
          <div className="tooltip">
            <Icon type="tooltip" />
            <div className="tooltip-text">
              <p>{tooltipText}</p>
            </div>
          </div>
        )}
      </p>
    </div>
  );
};

export default Value;
