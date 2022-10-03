import { useState } from "react";
import Header from "./components/Header.jsx";
import Modal from "./components/Modal.jsx";
import IconoNuevoGasto from "./img/nuevo-gasto.svg";

function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidPrespuesto, setIsValidPresupuesto] = useState(false);
  const [modal, setModal] = useState(false);

  const handleNuevoGasto = () => {
    setModal(true);
  };

  return (
    <>
      <div>
        <Header
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          isValidPrespuesto={isValidPrespuesto}
          setIsValidPresupuesto={setIsValidPresupuesto}
        />
        {isValidPrespuesto && (
          <div className="nuevo-gasto">
            <img
              src={IconoNuevoGasto}
              alt="Icono nuevo gasto"
              onClick={handleNuevoGasto}
            />
          </div>
        )}
        {modal && <Modal setModal={setModal} />}
      </div>
    </>
  );
}

export default App;
