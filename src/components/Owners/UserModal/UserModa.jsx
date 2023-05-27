import React, { useEffect, useRef, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./user-modal.module.scss";
import { setModalPerson } from "../../../store/slices/ownersControl";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@mui/material/TextField";
import { loadPersonId } from "../../../services/loadOwners";
import Button from "@mui/material/Button";
import { useSearchParams } from "react-router-dom";
import { updatePersonId } from "../../../services/loadOwners";
import { setListNames } from "../../../store/slices/ownersControl";

const UserModal = () => {
  const dispatch = useDispatch();
  const { ownerInformation } = useSelector((state) => state.owner);
  const { idOwner } = useSelector((state) => state.owner);
  const id = +idOwner;
  const [photoUser, setPhotoUser] = useState("");
  useEffect(() => {
    dispatch(loadPersonId(id));
  }, [id]);
  const fileInputRef = useRef(null);
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    setPhotoUser(url);
  };

  const [name, setName] = useState(ownerInformation.name);
  const [lastName, setLastName] = useState(ownerInformation.last_name);
  const [identification, setIdentification] = useState(
    ownerInformation.identification
  );
  const [email, setEmail] = useState(ownerInformation.email);
  const [phone, setPhone] = useState(ownerInformation.phone);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };
  const handleButtonSave = () => {
    updatePersonId(id, name, identification, email, photoUser, lastName, phone);
  };

  useEffect(() => {
    if (ownerInformation) {
      setName(ownerInformation.name || "");
      setLastName(ownerInformation.last_name || "");
      setIdentification(ownerInformation.identification || "");
      setEmail(ownerInformation.email || "");
      setPhone(ownerInformation.phone || "");
    }
  }, [ownerInformation]);

  console.log(ownerInformation);
  return (
    <div className={styles.modal_container}>
      <div className={styles.window_modal}>
        <button
          className={styles.close}
          onClick={() => {
            dispatch(setModalPerson(false));
            dispatch(setListNames([1]));
          }}
        >
          <CloseIcon />
        </button>
        <div className={styles.window_container}>
          <div className={styles.photo_data}>
            <div className={styles.photo_container}>
              <img src={photoUser} alt="person" />
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
              id="lastName"
              label="Apellido"
              variant="standard"
              value={lastName}
              InputLabelProps={{ shrink: true }}
              className={styles.text}
              onChange={(event) => setLastName(event.target.value)}
            />{" "}
            <TextField
              id="identification"
              label="Identificación"
              variant="standard"
              value={identification}
              InputLabelProps={{ shrink: true }}
              className={styles.text}
              onChange={(event) => setIdentification(event.target.value)}
            />
            <TextField
              id="email"
              label="Correo"
              variant="standard"
              value={email}
              InputLabelProps={{ shrink: true }}
              className={styles.text}
              onChange={(event) => setEmail(event.target.value)}
            />
            <TextField
              id="phonec"
              label="Telefono"
              variant="standard"
              value={phone}
              InputLabelProps={{ shrink: true }}
              className={styles.text}
              onChange={(event) => setPhone(event.target.value)}
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

export default UserModal;
