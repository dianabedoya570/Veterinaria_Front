import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./pet-edit-modal.module.scss";
import { loadPetById } from "../../../../services/loadOwners";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@mui/material/TextField";
import { setEditPet } from "../../../../store/slices/ownersControl";
import { updatePetId } from "../../../../services/loadOwners";
import Button from "@mui/material/Button";

const PetEditModal = () => {
  const { idPet } = useSelector((state) => state.owner);
  const { petInformation } = useSelector((state) => state.owner);
  const [photoPet, setPhotoPet] = useState("");
  const id = +idPet;
  const fileInputRef = useRef(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadPetById(id));
  }, [id]);

  const [name, setName] = useState(petInformation.pet_name);
  const [color, setColor] = useState(petInformation.pet_color);
  const [age, setAge] = useState(petInformation.pet_age);
  const [race, setRace] = useState(petInformation.pet_race);
  const [specie, setSpecie] = useState(petInformation.pet_specie);
  const [weight, setWeight] = useState(petInformation.pet_weight);
  const [status, setStatus] = useState(petInformation.pet_status);
  const [photo, setPhoto] = useState(petInformation.pet_image);

  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    setPhotoPet(url);
    //cloudinary

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "s35o2c05");

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dx1i7gswx/image/upload",
        formData
      );
      setPhoto(response.data.secure_url);
      //console.log("url image", response.data.secure_url);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (petInformation) {
      setName(petInformation.pet_name || "");
      setColor(petInformation.pet_color || "");
      setAge(petInformation.pet_age || "");
      setRace(petInformation.pet_race || "");
      setSpecie(petInformation.pet_specie || "");
      setWeight(petInformation.pet_weight || "");
      setStatus(petInformation.pet_status || "");
      setPhoto(petInformation.pet_image || "");
    }
  }, [petInformation]);
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };
  const handleButtonSave = () => {
    updatePetId(id, name, color, age, photo, race, specie, weight, status);
    dispatch(setEditPet(false));
  };

  return (
    <div className={styles.modal_container}>
      <div className={styles.window_modal}>
        <button
          className={styles.close}
          onClick={() => {
            dispatch(setEditPet(false));
          }}
        >
          <CloseIcon />
        </button>
        <div className={styles.window_container}>
          <div className={styles.photo_data}>
            <div className={styles.photo_container}>
              <img src={photo} alt="pet" />
            </div>
            <div>
              <div className={styles.upload_image__button}>
                <input
                  accept=".jpg, .png. .jpeg"
                  className={styles.input_image__button}
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageChange}
                />
                <Button
                  className={styles.button_upload}
                  onClick={handleButtonClick}
                >
                  Cargar foto
                </Button>
              </div>
            </div>
          </div>
          <div className={styles.input_container}>
            <TextField
              id="name"
              label="Nombre"
              variant="standard"
              value={name}
              InputLabelProps={{ shrink: true }}
              className={styles.text}
              onChange={(event) => setName(event.target.value)}
            />
            <TextField
              id="color"
              label="Color"
              variant="standard"
              value={color}
              InputLabelProps={{ shrink: true }}
              className={styles.text}
              onChange={(event) => setColor(event.target.value)}
            />{" "}
            <TextField
              id="age"
              label="Edad"
              variant="standard"
              value={age}
              InputLabelProps={{ shrink: true }}
              className={styles.text}
              onChange={(event) => setAge(event.target.value)}
            />
            <TextField
              id="race"
              label="Raza"
              variant="standard"
              value={race}
              InputLabelProps={{ shrink: true }}
              className={styles.text}
              onChange={(event) => setRace(event.target.value)}
            />
            <TextField
              id="specie"
              label="especie"
              variant="standard"
              value={specie}
              InputLabelProps={{ shrink: true }}
              className={styles.text}
              onChange={(event) => setSpecie(event.target.value)}
            />
            <TextField
              id="weight"
              label="Peso"
              variant="standard"
              value={weight}
              InputLabelProps={{ shrink: true }}
              className={styles.text}
              onChange={(event) => setWeight(event.target.value)}
            />
            <TextField
              id="status"
              label="Estado"
              variant="standard"
              value={status}
              InputLabelProps={{ shrink: true }}
              className={styles.text}
              onChange={(event) => setStatus(event.target.value)}
            />
          </div>
        </div>
        <div className={styles.container_button}>
          <button className={styles.save} onClick={handleButtonSave}>
            {" "}
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
};

export default PetEditModal;
