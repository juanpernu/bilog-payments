import { useRouter } from "next/router";
import { Button } from "../Buttons";

const Estimate = () => {
  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault();
    router.push("/pricing");
  };

  return (
    <div className="estimate">
      <div className="wrapper">
        <h2 className="subtitle">Desarrollado a tu medida</h2>
        <p className="text">
          Las clínicas y consultorios que usan Bilog incrementan sus ingresos y
          crecen más rapido reduciendo los procesos manuales al mínimo.
        </p>
        <div className="statistics">
          <div className="data">
            <span className="number">40%</span>
            <p className="disclaimer">Reducción de carga manual</p>
          </div>
          <div className="data">
            <span className="number">54%</span>
            <p className="disclaimer">Reducción de ausentismo</p>
          </div>
          <div className="data">
            <span className="number">86%</span>
            <p className="disclaimer">ROI después de pasarse a Bilog</p>
          </div>
        </div>
        <Button className="discover" modifier="terciary" onClick={handleClick}>
          <p>Descubrí que version es para vos</p>
        </Button>
      </div>
    </div>
  );
};

export default Estimate;
