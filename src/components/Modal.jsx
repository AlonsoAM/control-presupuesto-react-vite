import { useState } from "react";
import IconoCerrarModal from "../img/cerrar.svg";
import Mensaje from "./Mensaje";

const Modal = ({ setModal, animarModal, setAnimarModal, guardarGasto }) => {
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [categoria, setCategoria] = useState("");
  const [mensaje, setMensaje] = useState("");

  const ocultarModal = () => {
    setAnimarModal(false);
    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([nombre, cantidad, categoria].includes("")) {
      setMensaje("Todos los campos son obligatorios");
      setTimeout(() => {
        setMensaje("");
      }, 2000);
      return;
    }
    guardarGasto({ nombre, cantidad, categoria });
  };

  return (
    <>
      <div className="modal">
        <div className="cerrar-modal">
          <img
            src={IconoCerrarModal}
            alt="Cerrar modal"
            onClick={ocultarModal}
          />
        </div>
        <form
          onSubmit={handleSubmit}
          className={`formulario ${animarModal ? "animar" : "cerrar"}`}
        >
          <legend>Nuevo gasto</legend>
          {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
          <div className="campo">
            <label htmlFor="nombre">Nombre gasto</label>
            <input
              type="text"
              placeholder="Añade el nombre del gasto"
              id="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div className="campo">
            <label htmlFor="cantidad">Cantidad</label>
            <input
              type="number"
              placeholder="Añade la cantidad del gasto: ej: 300"
              id="cantidad"
              value={cantidad}
              onChange={(e) => setCantidad(Number(e.target.value))}
            />
          </div>
          <div className="campo">
            <label htmlFor="categoria">Categoría</label>
            <select
              id="categoria"
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
            >
              <option value="">-- Seleccione --</option>
              <option value="ahorro">Ahorro</option>
              <option value="comida">Comida</option>
              <option value="casa">Casa</option>
              <option value="gastos">Gastos Varios</option>
              <option value="ocio">Ocio</option>
              <option value="suscripciones">Suscripciones</option>
              <option value="salud">Salud</option>
            </select>
          </div>
          <input type="submit" value="Añadir Gasto" />
        </form>
      </div>
    </>
  );
};

export default Modal;
