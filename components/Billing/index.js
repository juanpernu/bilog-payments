import { formatVersion, splitAddons } from "../../utils";
import { Button } from "../Buttons";
import Icon from "../Icon";

const Billing = ({ billing, selectedAddons }) => {
  const splittedAddons = selectedAddons ? splitAddons(selectedAddons) : [];
  const {
    pricing: { version, price, addons },
    selected: { sms, emkt },
    profCount,
  } = billing;
  const monthlySubtotal =
    parseInt(profCount > 5 ? price.complex : price.simple) +
    parseInt(emkt.price ? emkt.price : 0) +
    parseInt(sms.price ? sms.price : 0);
  const oneShotSubtotal =
    parseInt(price.initial) +
    (splittedAddons.includes("aud") ? parseInt(addons.add_auditory) : 0) +
    (splittedAddons.includes("adm") ? parseInt(addons.add_administration) : 0) +
    (splittedAddons.includes("osde") ? parseInt(addons.add_osde) : 0);
  return (
    <section className="billing">
      <div className="billing-wrapper">
        <div className="content">
          <Icon type="wand" width={60} height={60} colorFill="#0de4e4" />
          <h3 className="subtitle">Tu selección incluye</h3>
          <p className="text">
            A la derecha vas a poder ver en detalle todo lo que incluye el plan
            que recomendamos para tu negocio ya que esta pre-cotización se
            ajusta exactamente a tu negocio en particular.
          </p>
          <Button modifier="terciary" onClick={() => console.log("hola")}>
            <p>Pre-Cotizar ahora</p>
          </Button>
        </div>
        <div className="detail">
          <div className="monthly">
            <p className="copy_title">Suscripción mensual</p>
            <p className="copy_description">
              Pago de frecuencia mensual que incluye los siguientes servicios.
            </p>
            <div className="item">
              <span className="description">
                Versión {formatVersion(version)}
              </span>
              <span className="price">
                $ {profCount > 5 ? price.complex : price.simple}.-
              </span>
            </div>
            {emkt && (
              <div className="item">
                <span className="description">Email Marketing</span>
                <span className="price">$ {emkt.price}.-</span>
              </div>
            )}
            {sms && (
              <div className="item">
                <span className="description">Envio de SMS</span>
                <span className="price">$ {sms.price}.-</span>
              </div>
            )}
            <div className="item total">
              <span className="description">Subtotal mensual</span>
              <span className="price">$ {monthlySubtotal}.-</span>
            </div>
          </div>
          <div className="one_shot">
            <p className="copy_title">Pago de única vez</p>
            <p className="copy_description">
              Pago inicial y de única vez en el tiempo que dure tu suscripción.
            </p>
            <div className="item">
              <span className="description">
                Instalación y puesta en marcha
              </span>
              <span className="price">$ {price.initial}.-</span>
            </div>
            {splittedAddons.includes("aud") && (
              <div className="item">
                <span className="description">Módulo Auditoria</span>
                <span className="price">$ {addons.add_auditory}.-</span>
              </div>
            )}
            {splittedAddons.includes("adm") && (
              <div className="item">
                <span className="description">Módulo Administración</span>
                <span className="price">$ {addons.add_administration}.-</span>
              </div>
            )}
            {splittedAddons.includes("osde") && (
              <div className="item">
                <span className="description">Módulo OSDE</span>
                <span className="price">$ {addons.add_osde}.-</span>
              </div>
            )}
            <div className="item total">
              <span className="description">Subtotal</span>
              <span className="price">$ {oneShotSubtotal}.-</span>
            </div>
          </div>
          <div className="total-bill">
            <p className="copy_title">Total</p>
            <span className="price">
              $ {monthlySubtotal + oneShotSubtotal}.-
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Billing;
