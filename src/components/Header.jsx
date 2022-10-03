import ControlPresupuesto from "./ControlPresupuesto.jsx";
import NuevoPresupuesto from "./NuevoPresupuesto.jsx";

const Header = ({
  presupuesto,
  setPresupuesto,
  isValidPrespuesto,
  setIsValidPresupuesto,
  gastos,
  setGastos,
}) => {
  return (
    <>
      <header>
        <h1>Planificador de Gastos</h1>
        {isValidPrespuesto ? (
          <ControlPresupuesto
            setGastos={setGastos}
            gastos={gastos}
            presupuesto={presupuesto}
            setPresupuesto={setPresupuesto}
            setIsValidPresupuesto={setIsValidPresupuesto}
          />
        ) : (
          <NuevoPresupuesto
            presupuesto={presupuesto}
            setPresupuesto={setPresupuesto}
            setIsValidPresupuesto={setIsValidPresupuesto}
          />
        )}
      </header>
    </>
  );
};

export default Header;
