import Image from "next/image";
import { useRouter } from "next/router";
import { Button } from "../../Buttons";
import Icon from "../../Icon";

const Feature = () => {
  const router = useRouter();

  const handleOnClick = () =>
    router.push({
      pathname: "https://www.bilog.com.ar/bilogApp",
    });

  return (
    <div className="banner-card">
      <div className="content">
        <div className="content-left">
          <Icon
            type="devices"
            width={70}
            height={70}
            className="icon"
            colorFill="#4669B0"
          />
          <h4 className="subtitle">Llevá tu consultorio a todos lados</h4>
          <p className="text">
            Con tu suscripción mensual podes manejar tu consultorio desde tu
            telefono con nuestra app mobile. Te da la posibilidad de acceder
            desde distintos dispositivos en forma simultánea y en red.
          </p>
          <div className="buttons">
            <Button modifier="primary" onClick={handleOnClick}>
              Descubrí la app
            </Button>
          </div>
        </div>
        <div className="content-right">
          <Image
            width="400"
            height="400"
            src="/static/landing-nativa/illustration.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Feature;
