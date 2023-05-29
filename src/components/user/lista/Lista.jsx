import React from "react";
import styles from "./lista.module.scss";

const Lista = () => {
  return (
    <div className={styles.lista}>
      {/* <label className="lista-label" htmlFor="select">
        Tipo documento
      </label> */}
      <select className={styles.lista_select} name="select" id="select">
        <option value="value1">Tipo de documento</option>
        <option value="value2">Cédula</option>
        <option value="value3">Pasaporte</option>
      </select>
    </div>
  );
};

export default Lista;
