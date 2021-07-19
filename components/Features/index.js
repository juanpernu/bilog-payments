import { Fragment } from "react";
import { FeatureItem } from "./item";
import { Content } from "../../content/features";

const Features = ({ version }) => {
  return (
    <div className="features">
      <div className="features-header">
        <h2 className="subtitle">
          {version ? "Lo que contiene" : "Todas las versiones incluyen"}
        </h2>
        <p className="copy">
          Obtené más de 100 funcionalidades que van a hacer que tu negocio
          despegue.
        </p>
      </div>
      <div className="features-container">
        {Content["default"].map((f) => (
          <FeatureItem
            icon={f.icon}
            title={f.title}
            description={f.description}
          />
        ))}
      </div>
      {Content[version] && (
        <Fragment>
          <div className="separator">
            <p className="copy uppercase">Y además</p>
          </div>
          <div className="features-container">
            {Content[version].map((f) => (
              <FeatureItem
                icon={f.icon}
                title={f.title}
                description={f.description}
              />
            ))}
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default Features;
