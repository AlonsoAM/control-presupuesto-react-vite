import { useState } from "react";
import Header from "./components/Header.jsx";
import Modal from "./components/Modal.jsx";
import { generarID, generateUUID } from "./helpers";
import IconoNuevoGasto from "./img/nuevo-gasto.svg";

function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidPrespuesto, setIsValidPresupuesto] = useState(false);
  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);
  const [gastos, setGastos] = useState([]);

  const handleNuevoGasto = () => {
    setModal(true);
    setTimeout(() => {
      setAnimarModal(true);
    }, 500);
  };

  const guardarGasto = (gasto) => {
    gasto.id = generateUUID();
    setGastos([...gastos, gasto]);
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
        {modal && (
          <Modal
            setModal={setModal}
            animarModal={animarModal}
            setAnimarModal={setAnimarModal}
            guardarGasto={guardarGasto}
          />
        )}
      </div>
    </>
  );
}

export default App;
