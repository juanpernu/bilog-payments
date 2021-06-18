import { ButtonLink } from '../Buttons';
import Modal from './Modalize'

const BannerCta = ({ title, buttonText, buttonHref, showModal, modalContent }) => {

  const renderModal = () => {
    return <Modal modalContent={modalContent} buttonText={buttonText} />
  }

  const renderButton = () => {
    return (
      <ButtonLink
        customClass="terciary"
        buttonHref={buttonHref}
        buttonText={buttonText}
      />
    )
  }

  return (
    <div className="bannerCta--container">
      <div className="bannerCta--content">
        <h4 className="bannerCta--title">{title}</h4>
        <div className="bannerCta--buttons">
          {showModal ? renderModal() : renderButton()}
        </div>
      </div>
    </div>
  )
}

export default BannerCta;
