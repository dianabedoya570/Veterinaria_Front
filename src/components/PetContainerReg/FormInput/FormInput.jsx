import React from "react";
import "./form_input.scss";

const FormInput = ({ fieldName, type, id, placeholderText }) => {
  return (
    <div>
      <label className="input-group" for={id}>
        <span className="input-group__span">{fieldName}</span>
        <input
          className="input-group__input"
          type={type}
          id={id}
          placeholder={placeholderText}
        />
      </label>
    </div>
  );
};
export default FormInput;
