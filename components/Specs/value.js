import Icon from "../Icon";

const Value = ({ text, price, tooltip, tooltipText, className }) => {
  return (
    <div className="price-wrapper">
      <p className="copy">{text}</p>
      <div className="price-value">
        <span className={className}>$ {price}</span>
        {tooltip && (
          <div className="tooltip">
            <Icon type="tooltip" />
            <div className="tooltip-text">
              <p>{tooltipText}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Value;
