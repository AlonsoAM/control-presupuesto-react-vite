import IconoCerrarModal from "../img/cerrar.svg";

const Modal = ({ setModal, animarModal, setAnimarModal }) => {
  const ocultarModal = () => {
    setAnimarModal(false);

    setTimeout(() => {
      setModal(false);
    }, 500);
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
        <form className={`formulario ${animarModal ? "animar" : "cerrar"}`}>
          <legend>Nuevo gasto</legend>
          <div className="campo">
            <label htmlFor="nombre">Nombre gasto</label>
            <input
              type="text"
              placeholder="Añade el nombre del gasto"
              id="nombre"
            />
          </div>
          <div className="campo">
            <label htmlFor="cantidad">Cantidad</label>
            <input
              type="number"
              placeholder="Añade la cantidad del gasto: ej: 300"
              id="cantidad"
            />
          </div>
          <div className="campo">
            <label htmlFor="categoria">Categoría</label>
            <select id="categoria">
              <option value="" key="">
                -- Seleccione --
              </option>
              <option value="ahorro" key="">
                Ahorro
              </option>
              <option value="comida" key="">
                Comida
              </option>
              <option value="casa" key="">
                Casa
              </option>
              <option value="gastos" key="">
                Gastos Varios
              </option>
              <option value="ocio" key="">
                Ocio
              </option>
              <option value="suscripciones" key="">
                Suscripciones
              </option>
            </select>
          </div>
          <input type="submit" value="Añadir Gasto" />
        </form>
      </div>
    </>
  );
};

export default Modal;
