import { useEffect, useState } from "react";
import { formatearCantidad } from "../helpers";

const ControlPresupuesto = ({ presupuesto, gastos }) => {
  const [disponble, setDisponble] = useState(0);
  const [gastado, setGastado] = useState(0);

  useEffect(() => {
    const totalGastado = gastos.reduce(
      (total, gasto) => gasto.cantidad + total,
      0
    );

    const totalDisponible = presupuesto - totalGastado;
    setDisponble(totalDisponible);
    setGastado(totalGastado);
  }, [gastos]);
  return (
    <>
      <div className="contenedor-presupuesto contenedor sombra dos-columnas">
        <div>
          <p>Grafica aquí</p>
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
