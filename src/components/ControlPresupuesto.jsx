import { useEffect, useState } from "react";
import { formatearCantidad } from "../helpers";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ControlPresupuesto = ({ presupuesto, gastos }) => {
  const [disponble, setDisponble] = useState(0);
  const [gastado, setGastado] = useState(0);
  const [porcentaje, setPorcentaje] = useState(0);

  useEffect(() => {
    const totalGastado = gastos.reduce(
      (total, gasto) => gasto.cantidad + total,
      0
    );

    const totalDisponible = presupuesto - totalGastado;

    // Calcular ek porcentaje gastado
    const nuevoPorcentaje = (
      ((presupuesto - totalDisponible) / presupuesto) *
      100
    ).toFixed(2);

    setTimeout(() => {
      setPorcentaje(nuevoPorcentaje);
    }, 1500);
    setDisponble(totalDisponible);
    setGastado(totalGastado);
  }, [gastos]);
  return (
    <>
      <div className="contenedor-presupuesto contenedor sombra dos-columnas">
        <div>
          <CircularProgressbar
            value={porcentaje}
            styles={buildStyles({
              pathColor: "#3B82F6",
              trailColor: "#F5F5F5",
              textColor: "#3B82F6",
            })}
            text={`${porcentaje}% Gastado`}
          />
        </div>
        <div className="contenido-presupuesto">
          <p>
            <span>Presupuesto: </span> {formatearCantidad(presupuesto)}
          </p>
          <p>
            <span>Disponible: </span> {formatearCantidad(disponble)}
          </p>
          <p>
            <span>Gastado: </span> {formatearCantidad(gastado)}
          </p>
        </div>
      </div>
    </>
  );
};

export default ControlPresupuesto;
