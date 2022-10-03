import ControlPresupuesto from "./ControlPresupuesto.jsx";
import NuevoPresupuesto from "./NuevoPresupuesto.jsx";

const Header = ({
  presupuesto,
  setPresupuesto,
  isValidPrespuesto,
  setIsValidPresupuesto,
  gastos,
}) => {
  return (
    <>
      <header>
        <h1>Planificador de Gastos</h1>
        {isValidPrespuesto ? (
          <ControlPresupuesto gastos={gastos} presupuesto={presupuesto} />
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
