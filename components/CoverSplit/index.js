import React from "react";
import { useRouter } from "next/router";
import { Button } from "../Buttons";

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
          <div className="annotation">
            <p className="copy">Cotizá tu plan y descubrí cuál es</p>
            <h2 className="title">
              la versión que mejor se adapta a tu negocio.
            </h2>
          </div>
          <p className="copy">
            Te invitamos a simular tu inversión y a conocer la cobertura de
            nuestros planes.
          </p>
        </div>
        <div className="content right">
          <div className="annotation">
            <p className="copy">¡Empezá por acá!</p>
            <h2 className="subtitle">
              Precios pensados para que se ajusten a negocios de todos los
              tamaños.
            </h2>
          </div>
          <Button modifier="secondary" onClick={() => handleOnClick()}>
            ¡Cotizá ahora!
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CoverSplit;
