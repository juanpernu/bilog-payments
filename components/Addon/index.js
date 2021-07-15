import Addon from "./addonItem";
import Content from "../../content/addons";

const Addons = ({ addons }) => {
  const splitedAddons = addons.split(",");
  return (
    <section className="addons">
      <h2 className="addons-title">Mirá todo lo que podes hacer con</h2>
      {splitedAddons.map((ad) => {
        const item = Content[ad];
        return (
          <Addon
            title={item.title}
            description={item.description}
            icon={item.icon}
            price={item.price}
            items={item.items}
          />
        );
      })}
    </section>
  );
};

export default Addons;
