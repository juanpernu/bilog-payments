const Value = ({ text, price, className }) => {
  return (
    <div className="price-wrapper">
      <p className="copy">{text}</p>
      <p className={`price-value ${className}`}>
        $ {price}
        <span className="decimals">,00</span>
      </p>
    </div>
  );
};

export default Value;
