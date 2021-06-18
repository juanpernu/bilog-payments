import Link from 'next/link';
import PropTypes from 'prop-types';
import { ButtonBanner } from '../../Buttons';

const ButtonLink = ({ buttonText, hrefAs, customClass, buttonHref, fullWidth }) => (
  <span className={`button--container ${fullWidth ? 'full-width' : ''}`}>
    <Link href={buttonHref} as={hrefAs}>
      <ButtonBanner customClass={customClass}>
        {buttonText}
      </ButtonBanner>
    </Link>
  </span>
)

ButtonLink.propTypes = {
  buttonHref: PropTypes.string,
}

ButtonLink.defaultProps = {
  buttonHref: '#',
}

export default ButtonLink;
