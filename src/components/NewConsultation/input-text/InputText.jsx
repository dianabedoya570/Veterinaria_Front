import React from "react";
import "./inputText.scss";

const InputText = ({ label }) => {
  return (
    <div className="input">
      <label htmlFor={label} className="input__label">
        {label}
      </label>
      <input type="text" id={label} name={label} className="input__input" />
    </div>
  );
};

export default InputText;
