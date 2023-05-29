// eslint-disable-next-line no-unused-vars
import React from "react";
import { FormInput } from "../PetContainerReg/FormInput";
import { FormSelect } from "../PetContainerReg/FormSelect";
import { FormButton } from "../PetContainerReg/FormButton";

import "./desparasitacion_reg.scss";

const DesparasitacionReg = () => {
  const tipoDesparacitante = [
    { nameItem: "Bravecto perro 1000 Mg ", id: 1 },
    { nameItem: "Nexgard 10-25 kg", id: 2 },
    { nameItem: "Parvo Total F Lc perro", id: 3 },
    { nameItem: "Epiotic Spherulites x 100 ml", id: 4 },
    { nameItem: "Rondel jeringa x 5 ml", id: 5 },
  ];

  return (
    <div className="card_desparasitacion">
      <div className="card_desparasitacion__info">
        <h1 className="card_desparasitacion__info__h1">Desparasitación</h1>
        <FormSelect
          fieldName={"Producto"}
          id={"selectProducto"}
          list={tipoDesparacitante}
        />
        <FormInput
          fieldName="Lote"
          type={"text"}
          id={"inputLote"}
          placeholderText={"Ingrese el lote del producto"}
        />

        <FormInput
          fieldName="Fecha Próxima Desparasitación"
          type={"date"}
          id={"inputProxima"}
          placeholderText={"dd/mm/yyyy"}
        />
        <FormButton fieldName="Cerrar" type="submit" />

        <FormButton fieldName="Guardar" type="submit" />
      </div>
    </div>
  );
};
export default DesparasitacionReg;
