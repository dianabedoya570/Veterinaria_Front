import React from "react";
import "./pets_hospitalization.scss";
import { Kardex } from "./Kardex";

const PetsHospitalization = () => {
  return (
    <div className="prueba">
      <div className="div-ppal">
        <div className="div-ppal__title">
          <h1>Hospitalización</h1>
        </div>
        <div className="div-ppal__details">
          <div className="div-ppal___form">
            <input type="text" placeholder="Motivo de hospitalización" />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Observaciones"
            ></textarea>
          </div>
          <div className="div-ppal___table">
            <Kardex />
          </div>
        </div>
        <div className="botones">
          <div className="botones-hosp">
            <button>Save</button>
            <button>Cerrar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetsHospitalization;
