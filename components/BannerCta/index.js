import { ButtonLink } from '../Buttons';
import Modal from './Modalize'

const BannerCta = ({ title, buttonText, buttonHref, showModal, modalContent }) => {
  return (
    <div className="bannerCta--container">
      <div className="bannerCta--content">
        <h4 className="bannerCta--title">{title}</h4>
        <div className="bannerCta--buttons">
          {showModal ?
            <Modal modalContent={modalContent} buttonText={buttonText} /> :
            <ButtonLink
              customClass="terciary"
              buttonHref={buttonHref}
              buttonText={buttonText}
            />}
        </div>
      </div>
    </div>
  )
}

export default BannerCta;
