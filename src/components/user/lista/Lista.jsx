import React from "react";
import "./lista.scss";

const Lista = () => {
  return (
    <div className="lista">
      <label className="lista-label" htmlFor="select">
        Tipo documento
      </label>
      <select className="lista-select" name="select" id="select">
        <option value="value1">Cédula</option>
        <option value="value2">Pasaporte</option>
        <option value="value3">Matricula profesional</option>
      </select>
    </div>
  );
};

export default Lista;
