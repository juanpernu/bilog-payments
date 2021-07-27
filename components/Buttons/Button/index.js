const Button = ({
  modifier = "primary",
  className,
  fullWidth,
  onClick,
  children,
}) => {
  return (
    <button
      className={`${modifier} ${className} ${fullWidth ? "full-width" : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
