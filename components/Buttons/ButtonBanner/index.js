const ButtonBanner = ({ children, customClass, onClick }) => {
  return (
    <button aria-label={`Button ${children}`} onClick={onClick} className={`button ${customClass}`}>
      <p>{children}</p>
    </button>
  )
}

export default ButtonBanner;
