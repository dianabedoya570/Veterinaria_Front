import React from "react";
import "./input-area.scss";

const InputArea = ({ label }) => {
  return (
    <div className="area">
      <label htmlFor={label} className="area__label">
        {label}
      </label>
      <textarea type="text" id={label} name={label} className="area__input" />
    </div>
  );
};

export default InputArea;
