import React from "react";
import { FormInput } from "../PetContainerReg/FormInput";
import { FormSelect } from "../PetContainerReg/FormSelect";
import { FormButton } from "../PetContainerReg/FormButton";

import "./vacunacion_reg.scss";

const VacunacionReg = () => {
  const tipoVacuna = [
    { nameItem: "Parvo Triple (1ra dosis)", id: 1 },
    { nameItem: "Parvo Triple (2da dosis)", id: 2 },
    { nameItem: "Parvo Triple + antirrábica", id: 3 },
    { nameItem: "Triple felina ", id: 4 },
    { nameItem: "Triple felina + antirrábica", id: 5 },
  ];
  const FabricantesList = [
    { nameItem: "Boehringer Ingelheim", id: 1 },
    { nameItem: "Ecuphar", id: 2 },
    { nameItem: "Letipharma - Univetd", id: 3 },
    { nameItem: "Virbac ", id: 4 },
    { nameItem: "Zoetis", id: 5 },
  ];

  return (
    <div className="card_vacuna">
      <div className="card_vacuna__info">
        <h1 className="card_vacuna__info__h1">Vacunación</h1>
        <FormSelect
          fieldName={"Vacuna"}
          id={"selectVacuna"}
          list={tipoVacuna}
        />
        <FormInput
          fieldName="Lote"
          type={"text"}
          id={"inputLote"}
          placeholderText={"Ingrese el lote de la vacuna"}
        />
        <FormSelect
          fieldName={"Fabricante"}
          id={"selectFabricante"}
          list={FabricantesList}
        />

        <FormInput
          fieldName="Fecha Vencimiento"
          type={"date"}
          id={"inputVencimiento"}
          placeholderText={"dd/mm/yyyy"}
        />
        <FormInput
          fieldName="Fecha Próxima Vacuna"
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
export default VacunacionReg;
