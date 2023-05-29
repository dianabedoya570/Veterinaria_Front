import React from "react";

import "./card.scss";
import Image from "./assets/perro.jpg";
const Pet = () => {
  return (
    <div className="main">
      <div className="main__card">
        <div className="div-img">
          <img className="div-img__img-redonda" src={Image} alt="" />
        </div>

        <div className="div-info">
          <div className="div-info__title">
            <h1>Belen</h1>
          </div>

          <div className="div-info__details">
            <div className="div-info___detail">
              <p>Genero: Hembra</p>
            </div>
            <div className="div-info___detail">
              <p>Raza: Criollo</p>
            </div>
            <div className="div-info___detail">
              <p>Especie: Canino</p>
            </div>
            <div className="div-info___detail">
              <p>Color: Negro y café</p>
            </div>
            <div className="div-info___detail">
              <p>Peso: 20Kg</p>
            </div>
            <div className="div-info___detail">
              Observaciones: jdhfksdjhfksjdhfksdjhfksdjhfksjdhf
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
