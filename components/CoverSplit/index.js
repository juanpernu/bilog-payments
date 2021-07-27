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
    <div className="cover-split--wrapper">
      <div className="cover-split--container">
        <div className="left-content">
          <h2 className="left-title">Cotizá tu plan y evaluá cuál es la mejor opción para cuidar tu salud</h2>
          <p className="left-copy">Te invitamos a simular tu cuota y a conocer la cobertura de nuestros planes.</p>
        </div>
        <div className="right-content">
          <h2 className="right-title">¿Queres saber cual es la versión que más te conviene?</h2>
          <Button modifier="terciary" onClick={() => handleOnClick()}>
            ¡Cotizá ahora!
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CoverSplit;
