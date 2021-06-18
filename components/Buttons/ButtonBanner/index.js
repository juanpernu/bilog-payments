import PropTypes from 'prop-types';

const ButtonBanner = ({ children, customClass, onClick }) => (
  <React.Fragment>
    <button aria-label={`Button ${children}`} onClick={onClick} className={`button ${customClass}`}>
      <p>{children}</p>
    </button>
  </React.Fragment>
)

ButtonBanner.propTypes = {
  buttonHref: PropTypes.string,
}

ButtonBanner.defaultProps = {
  buttonHref: '#',
}

export default ButtonBanner;
