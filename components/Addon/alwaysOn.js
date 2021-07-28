import AlwaysOnItem from "./alwaysOnItem";
import { AlwaysOn } from "../../content/addons";
import { addonPriceMapper } from "../../utils";

const AlwaysOnAddons = ({ addons, onChange }) => {
  return (
    <section className="addons">
      <div className="addons-header">
        <h2 className="subtitle">Cerca de tu pacientes, como nunca antes</h2>
        <p className="copy">
          Mantenete cerca de tus pacientes, siempre. Con nuestros servicios de
          Email Marketing y envío de SMS.
        </p>
      </div>
      <div className="alwayson-items">
        {["emkt", "sms"].map((ad, i) => {
          const item = AlwaysOn[ad];
          return (
            <AlwaysOnItem
              key={i}
              addKey={ad}
              onChange={onChange}
              title={item.title}
              description={item.description}
              icon={item.icon}
              color={item.color}
              price={addonPriceMapper(ad, addons)}
            />
          );
        })}
      </div>
    </section>
  );
};

export default AlwaysOnAddons;
