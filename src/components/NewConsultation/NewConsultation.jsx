import React from "react";
import "./new-consultation.scss";
import { InputText } from "./input-text";
import { InputArea } from "./input-area";

const NewConsultation = () => {
  return (
    <div className="consultation">
      <h1 className="consultation__tittle">Nueva consulta</h1>
      <InputText label="Motivo de consulta" />
      <InputText label="Peso" />
      <InputArea label="Detalle consulta" />
      <div>
        <button className="consultation__button">Close</button>
        <button className="consultation__button">Save</button>
      </div>
    </div>
  );
};

export default NewConsultation;
