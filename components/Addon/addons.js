import { Fragment } from "react";
import Addon from "./addonItem";
import { Content } from "../../content/addons";
import { splitAddons } from "../../utils";

const Addons = ({ addons }) => {
  const splitedAddons = splitAddons(addons);
  return (
    <section className="addons">
      <div className="addons-header">
        <h2 className="subtitle">Potenciá tu negocio al instante</h2>
        <p className="copy">
          Aumentá el rendimiento de tu negocio con nuestros módulos
          especializados.
        </p>
      </div>
      {splitedAddons.map((ad, i) => {
        const item = Content[ad];
        return (
          <Fragment key={i}>
            <Addon
              title={item.title}
              description={item.description}
              icon={item.icon}
              color={item.color}
              price={item.price}
              items={item.items}
            />
          </Fragment>
        );
      })}
    </section>
  );
};

export default Addons;
