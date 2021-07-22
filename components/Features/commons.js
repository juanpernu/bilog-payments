import Card from "../Card";
import { Content } from "../../content/cards";

const Commons = () => {
  return (
    <div className="features">
      <div className="features-header">
        <h2 className="subtitle">Explorá nuestras versiones</h2>
        <p className="copy">
          Descubrí nuestras cuatro versiones pensadas y diseñadas para que se
          ajusten a tu medida.
        </p>
      </div>
      <div className="commons-container">
        {Content.map((card) => (
          <Card className="version-card">
            <div className="card-content">
              <span className="copy">{card.copy}</span>
              <h3 className="title">{card.title}</h3>
              <p className="text">{card.text}</p>
            </div>
            <a
              className="version-link"
              href={`/versions?version=${card.id}&shallow=true`}
            >
              <p>Conocé más</p>
            </a>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Commons;
