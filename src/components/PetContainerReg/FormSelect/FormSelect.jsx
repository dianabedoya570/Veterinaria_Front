import React from "react";
import "./form_select.scss";

const FormSelect = ({ fieldName, id, list }) => {
  return (
    <div>
      <label className="select-group" for={id}>
        <span>{fieldName}</span>
        <select id={id} name={fieldName}>
          {list.length >= 1 &&
            list.map(({ nameItem }, index) => (
              <option value={nameItem}>{nameItem}</option>
            ))}
        </select>
      </label>
    </div>
  );
};
export default FormSelect;
