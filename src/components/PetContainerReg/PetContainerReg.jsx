import React, { useState, useRef } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { setPhotoPet } from "../../store/slices/register";
import styles from "./pet_container_reg.module.scss";
import { FotoPet } from "./foto";
import petRegister from "../../images/pets.jpg";
const PetContainerReg = () => {
  const fileInputRef = useRef(null);
  const dispatch = useDispatch();
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    dispatch(setPhotoPet(url));
  };
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };
  return (
    <div className={styles.petregister}>
      <div className={styles.petregister__contain}>
        <div className={styles.img_container}>
          <img
            src={petRegister}
            alt="Pet"
            className={styles.picture_register}
          />
        </div>
        <div className={styles.register}>
          <div className={styles.petregister__contain__header}>
            <div className={styles.upload_image}>
              <FotoPet />
              <div>
                <input
                  accept=".jpg, .png. .jpeg"
                  className={styles.upload_image__button}
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageChange}
                />
                <Button
                  className={styles.upload_photo}
                  onClick={handleButtonClick}
                >
                  Cargar foto
                </Button>
              </div>
            </div>
          </div>
          <form className={styles.petregister__contain__input}>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "30ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField required id="outlined-required" label="Nombre" />
              <TextField required id="outlined-required" label="Color" />
              <TextField
                required
                id="outlined-required"
                label="Edad"
                type="number"
              />
              <TextField required id="outlined-required" label="Raza" />
              <TextField required id="outlined-required" label="Especie" />
              <TextField
                required
                id="outlined-required"
                label="Peso"
                type="number"
              />
              <TextField
                required
                id="outlined-required"
                label="Estado"
                type="number"
              />
            </Box>
            <div className={styles.crear}>
              <Button
                className={styles.button}
                type="submit"
                variant="contained"
              >
                Registrar
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default PetContainerReg;
