import React from "react";
import { useRouter } from "next/router";
import Button from "../Buttons/Button";

const CoverSplit = ({ url }) => {
  const router = useRouter();

  const handleOnClick = async () => {
    router.push({
      pathname: url,
    });
  };

  return (
    <div className="cover-split">
      <div className="cover-split-container">
        <div className="content left">
          <h2 className="title">
            Cotizá tu plan y evaluá cuál es la mejor opción para cuidar tu salud
          </h2>
          <p className="copy">
            Te invitamos a simular tu cuota y a conocer la cobertura de nuestros
            planes.
          </p>
        </div>
        <div className="content right">
          <h2 className="title">
            ¿Queres saber cual es la versión que más te conviene?
          </h2>
          <Button modifier="secondary" onClick={() => handleOnClick()}>
            ¡Cotizá ahora!
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CoverSplit;
