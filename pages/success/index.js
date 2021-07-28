import { useRouter } from "next/router";

import Cover from "../../components/Cover";
import Card from "../../components/Card";
import Icon from "../../components/Icon";
import { Button } from "../../components/Buttons";

const Success = () => {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push("https://www.bilog.com.ar/odontologica");
  };

  return (
    <section className="custom-page">
      <Cover template="custom">
        <Card className="success-card">
          <Icon
            type="send"
            width={60}
            height={60}
            className="icon"
            colorFill="#fff"
          />
          <h3 className="subtitle">El formulario se envió correctamente</h3>
          <p className="text">
            Te vamos a llamar a la brevedad. Gracias por la confianza y tu
            interés interés en Bilog.
          </p>
        </Card>
      </Cover>
      <div className="sugestion-message">
        <h5 className="subtitle">¡Seguí descubriendo!</h5>
        <p className="text">
          Te invitamos a que hagas click para conocer más acerca de nuestro
          servicio.
        </p>
        <Button onClick={handleClick} className="sugestion-button">
          Ver más información
        </Button>
      </div>
    </section>
  );
};

export default Success;
