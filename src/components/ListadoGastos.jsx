import Gasto from "./Gasto";

const ListadoGastos = ({
  gastos,
  setGastoEditar,
  eliminarGasto,
  filtro,
  gastosFiltrados,
}) => {
  return (
    <>
      <div className="listado-gastos contenedor">
        {filtro ? (
          <>
            <h2>
              {gastosFiltrados.length
                ? "Gastos"
                : "No hay gastos en esta categoría"}
            </h2>
            {gastosFiltrados.map((gasto) => (
              <Gasto
                eliminarGasto={eliminarGasto}
                gasto={gasto}
                key={gasto.id}
                setGastoEditar={setGastoEditar}
              />
            ))}
          </>
        ) : (
          <>
            <h2>{gastos.length ? "Gastos" : "No hay gastos aún"}</h2>
            {gastos.map((gasto) => (
              <Gasto
                eliminarGasto={eliminarGasto}
                gasto={gasto}
                key={gasto.id}
                setGastoEditar={setGastoEditar}
              />
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default ListadoGastos;
