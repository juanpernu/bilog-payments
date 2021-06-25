import React, { useState } from 'react';
import Modal from 'react-responsive-modal';
import ButtonBanner from '../Buttons/ButtonBanner';

const Modalize = ({ buttonText, modalContent }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClickModalHandler = () => setIsOpen(!isOpen);

  return (
    <React.Fragment>
      <ButtonBanner customClass="terciary" onClick={onClickModalHandler}>
        {buttonText}
      </ButtonBanner>
      <Modal open={isOpen} onClose={onClickModalHandler} center>
        {modalContent}
      </Modal>
    </React.Fragment>
  )
}

export default Modalize;
