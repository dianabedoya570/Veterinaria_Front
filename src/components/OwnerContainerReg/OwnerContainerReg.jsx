import React from "react";
import { FormInput } from "../PetContainerReg/FormInput";
import { FormSelect } from "../PetContainerReg/FormSelect";
import { FormButton } from "../PetContainerReg/FormButton";

import "./owner_container_reg.scss";

import image from "../../images/ouner.png";

const OwnerContainerReg = () => {
  const tipoDocumento = [
    { nameItem: "Cédula de ciudadania", id: 1 },
    { nameItem: "Cédula de extranjería", id: 2 },
    { nameItem: "Pasaporte", id: 3 },
    { nameItem: "Número único de identificación personal ", id: 4 },
    { nameItem: "Tarjeta de Identidad", id: 5 },
  ];
  const name = "Owner";
  return (
    <div className="card_owner">
      <div className="card_owner__Fotograph">
        <div class="card_owner__Fotograph__img">
          <img className="div-img__img-redonda" src={image} alt={name} />
        </div>
        <FormButton fieldName="Agregar Foto" type="submit" />
      </div>
      <div className="card_owner__info">
        <h1 className="card_owner__info__h1">Propietarios</h1>
        <FormInput
          fieldName="Nombre"
          type={"text"}
          id={"inputNombre"}
          placeholderText={"Ingrese el nombre"}
        />

        <FormInput
          fieldName="Apellido"
          type={"text"}
          id={"inputApellido"}
          placeholderText={"Ingrese el apellido"}
        />
        <FormSelect
          fieldName={"Tipo Documento"}
          id={"selectTipoDocumento"}
          list={tipoDocumento}
        />
        <FormInput
          fieldName="Nro. Documento"
          type={"text"}
          id={"inputDocumento"}
          placeholderText={"Ingrese el número de documento"}
        />
        <FormInput
          fieldName="Numero de Contacto Principal"
          type={"text"}
          id={"inputContacto1"}
          placeholderText={"Ingrese  celular/fijo"}
        />
        <FormInput
          fieldName="Otro Numero de Contacto"
          type={"text"}
          id={"inputContacto2"}
          placeholderText={"Ingrese  celular/fijo"}
        />
        <FormInput
          fieldName="Correo"
          type={"temail"}
          id={"inputCorreo"}
          placeholderText={"Ingrese el Correo"}
        />
        <div className="register-button">
          <FormButton fieldName="Guardar" type="submit" />
        </div>
      </div>
    </div>
  );
};
export default OwnerContainerReg;
