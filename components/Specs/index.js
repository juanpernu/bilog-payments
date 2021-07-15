import { Fragment, useState } from "react";
import Value from "./value";
import Video from "../Video";
import Icon from "../Icon";
import Button from "../Button";
import Modal from "../Modal";

const Specs = ({ price, desc, video, id }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="specs-container">
      <div className="specs-details">
        <p className="copy">Características</p>
        {id ? (
          <h3 className="subtitle">Es la mejor para vos por que...</h3>
        ) : (
          <h3 className="subtitle">
            Hay una versión pensada especialmente para vos.
          </h3>
        )}
        <p className="description">{desc}</p>
      </div>
      <div className="specs-price">
        {price ? (
          <Fragment>
            <div className="detached-prices">
              <Value
                text="Tarifa de instalación"
                price={price.initial}
                tooltipText="Un pago de única vez que contempla la instalación y puesta en marcha del servicio."
                tooltip
              />
              <Value
                text="Suscripción mensual"
                className={id}
                price={price.simple}
                tooltipText="Valor mensual de la suscripción al servicio."
                tooltip
              />
            </div>
            <div className="video">
              <h3 className="video-title">¿Todavia tenés dudas?</h3>
              <p className="video-text">
                Mirá el video de la demostración y descubrí por qué somos la
                mejor opción para tu clínica o consultorio.
              </p>
              <Button onClick={() => setShowModal(true)}>
                <span className="video-button">
                  <p>Ver video</p>
                  <Icon type="video" colorFill="#fff" />
                </span>
              </Button>
            </div>
            <Modal
              title="Video demostración"
              isOpenModal={showModal}
              closeModal={() => setShowModal(false)}
              openModal={() => setShowModal(true)}
              strech
            >
              <Video url={video} id={id} />
            </Modal>
          </Fragment>
        ) : (
          <Video url={video} id={id} />
        )}
      </div>
    </div>
  );
};

export default Specs;
