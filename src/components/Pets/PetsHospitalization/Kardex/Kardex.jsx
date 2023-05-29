import React from "react";
import "./kardex.scss";

const Kardex = () => {
  return (
    <div className="div-kardex">
      <table id="customers">
        <tr>
          <th>Medicamento</th>
          <th>Dosis</th>
          <th>Observaciones</th>
        </tr>
        <tr>
          <td>Meloxicam</td>
          <td>0.5mg/kg</td>
          <td>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim omnis
            rerum non? Quos dolorem veritatis at ipsum inventore? Deserunt ipsum
            animi quis quos obcaecati cupiditate hic sequi atque nulla debitis!
          </td>
        </tr>
        <tr>
          <td>Metronidazol</td>
          <td>25mg/kg</td>
          <td>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
            fugit. Quis, maxime. Provident, maxime. Sequi cupiditate natus
            architecto. Dicta nam quibusdam neque reiciendis similique nemo
            nulla corporis est recusandae ab.
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Kardex;
