import React, { useState, useRef } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  createHistory,
  selectHistoryState,
} from "../../store/slices/history/historySilce";
import { setPhotoPet } from "../../store/slices/register";
import styles from "./pet_container_reg.module.scss";
import { FotoPet } from "./foto";
import petRegister from "../../images/pets.jpg";
import { createPet } from "../../services/pet";
import { useNavigate } from "react-router-dom";
const PetContainerReg = () => {
  const { idOwner } = useSelector((state) => state.owner);
  const idUser = +idOwner;
  const fileInputRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const history = useSelector(selectHistoryState) || {};

  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    dispatch(setPhotoPet(url));

    //cloudinary

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "s35o2c05");

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dx1i7gswx/image/upload",
        formData
      );
      setImage(response.data.secure_url);
      //console.log("url image", response.data.secure_url);
    } catch (error) {
      console.error(error);
    }
  };

  //data to capture
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const [age, setAge] = useState("");
  const [race, setRace] = useState("");
  const [specie, setSpecie] = useState("");
  const [weight, setWeight] = useState("");
  const [status, setStatus] = useState("");
  const [image, setImage] = useState("");

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const petIsCreated = () => {};
  //console.log(idUser);

  const handleClickSave = async () => {
    const res = await createPet(
      name,
      color,
      age,
      race,
      specie,
      weight,
      image,
      status,
      idUser
    );
    console.log("datos creados", res.status);

    if (res.status === 201) {
      console.log("mascota creada satisfactoriamente", res.data.idpet);
      dispatch(
        createHistory({
          idpet: res.data.idpet,
          token: sessionStorage.getItem("token"),
        })
      );
      console.log("res***", res);
    }
    navigate("/owners");
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
              <TextField
                required
                id="name"
                label="Nombre"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
              <TextField
                required
                id="color"
                label="Color"
                value={color}
                onChange={(event) => setColor(event.target.value)}
              />
              <TextField
                required
                id="age"
                label="Edad"
                type="number"
                value={age}
                onChange={(event) => setAge(event.target.value)}
              />
              <TextField
                required
                id="race"
                label="Raza"
                value={race}
                onChange={(event) => setRace(event.target.value)}
              />
              <TextField
                required
                id="specie"
                label="Especie"
                value={specie}
                onChange={(event) => setSpecie(event.target.value)}
              />
              <TextField
                required
                id="weight"
                label="Peso"
                type="number"
                value={weight}
                onChange={(event) => setWeight(event.target.value)}
              />
              <TextField
                required
                id="status"
                label="Estado"
                type="number"
                value={status}
                onChange={(event) => setStatus(event.target.value)}
              />
            </Box>
            <div className={styles.crear}>
              <Button
                className={styles.button}
                type="button"
                variant="contained"
                onClick={handleClickSave}
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
