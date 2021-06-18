const Button = ({ modifier = 'primary', className, onClick, text}) => {
  return <button className={`${modifier} ${className}`} onClick={onClick}>{text}</button>
};

export default Button;
