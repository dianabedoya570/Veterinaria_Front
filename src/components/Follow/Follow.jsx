/* eslint-disable no-unused-vars */
import React from "react";
import "./follow.scss";
import { InputArea } from "./input-area";

const Follow = () => {
  return (
    <div className="consultation">
      <h1 className="consultation__tittle">Seguimiento</h1>

      <InputArea label="Detalle del seguimiento" />
      <div>
        <button className="consultation__button">Close</button>
        <button className="consultation__button">Save</button>
      </div>
    </div>
  );
};

export default Follow;
