import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const FormInput = ({ fieldName, type, id, placeholderText }) => {
  return (
    <div>
      <TextField id="outlined-required" label="Motivo consulta" />
    </div>
  );
};
export default FormInput;
