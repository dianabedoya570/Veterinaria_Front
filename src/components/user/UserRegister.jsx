import React, { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  CreatePerson,
  selectPersonState,
} from "../../store/slices/person/personSlice";
import axios from "axios";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Alert from "@mui/material/Alert";
import styles from "./user.module.scss";
import userRegister from "../../images/user-register.png";
import { FotoUser } from "./foto";
import { setPhotoUser } from "../../store/slices/register";
import { Photo } from "@mui/icons-material";

const UserRegister = () => {
  const [typeUser, setTypeUser] = React.useState("usuario");
  const [userData, setUserData] = useState({
    name: "",
    last_name: "",
    identification: "",
    email: "",
    phone: "",
    password: "",
    passwordConfirm: "",
    image: "www.image.com",
    status: true,
    idrol: 1,
    token: "",
  });
  const [msgError, setMsgError] = useState("");
  const dispatch = useDispatch();

  const response = useSelector(selectPersonState) || {};
  const [photo, setPhoto] = useState("");
  const handleUser = (event, newTypeUser) => {
    setTypeUser(newTypeUser);
  };
  const fileInputRef = useRef(null);

  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    dispatch(setPhotoUser(url));

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
      console.log("url image", response.data.secure_url);
    } catch (error) {
      console.error(error);
    }
  };
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  function handleSubmit(event) {
    event.preventDefault();

    if (userData.passwordConfirm === userData.password) {
      dispatch(
        CreatePerson({
          name: userData.name,
          last_name: userData.last_name,
          identification: userData.identification,
          email: userData.email,
          phone: userData.phone,
          password: userData.password,
          image: photo,
          status: true,
          idrol: 1,
          token: sessionStorage.getItem("token"),
        })
      );
      console.log("response***", response.person.success);
    } else {
      setMsgError("Las contraseñas no coinciden");
    }
    //dispatch(Login(credentials));
    //navigate("/loby");
  }

  useEffect(() => {
    console.log("response: ", response.person.success);
    if (response.person.success) {
      setMsgError("Registro realizado con éxito!");
    }
  }, [response]);

  useEffect(() => {
    console.log("Mensaje error:", msgError);
  }, [msgError]);
  return (
    <div className={styles.userregister}>
      <div className={styles.userregister__contain}>
        <div className={styles.img_container}>
          <img
            src={userRegister}
            alt="doctor"
            className={styles.picture_register}
          />
          <div>
            {msgError && (
              <Alert
                severity="error"
                onClose={() => setMsgError("")}
                sx={{ justifyContent: "space-between", alignItems: "center" }}
              >
                {msgError}
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => setMsgError("")}
                ></IconButton>
              </Alert>
            )}
          </div>
        </div>
        <div className={styles.register}>
          <div className={styles.userregister__contain__header}>
            <div className={styles.upload_image}>
              <FotoUser />
              <div className={styles.upload_image__button}>
                <input
                  accept=".jpg, .png. .jpeg"
                  className={styles.upload_image__input}
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
          <form
            className={styles.userregister__contain__input}
            onSubmit={handleSubmit}
          >
            <div className={styles.container_toggle}>
              <ToggleButtonGroup
                value={typeUser}
                exclusive
                onChange={handleUser}
                aria-label="Tipo de usuaro"
              >
                <ToggleButton
                  className={styles.toggle_button}
                  value="medico"
                  aria-label="medico"
                >
                  <h3>Medico</h3>
                </ToggleButton>

                <ToggleButton
                  className={styles.toggle_button}
                  value="usuario"
                  aria-label="usuario"
                >
                  <h3>usuario</h3>
                </ToggleButton>
              </ToggleButtonGroup>
            </div>
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
                id="outlined-required"
                label="Nombre"
                name="name"
                value={userData.name}
                onChange={handleInputChange}
              />
              <TextField
                required
                id="outlined-required"
                label="Apellido"
                name="last_name"
                value={userData.last_name}
                onChange={handleInputChange}
              />
              <TextField
                required
                id="outlined-required"
                label="Identificación"
                name="identification"
                value={userData.identification}
                onChange={handleInputChange}
              />
              <TextField
                required
                id="outlined-required"
                label="Email"
                name="email"
                value={userData.email}
                onChange={handleInputChange}
              />
              <TextField
                required
                id="outlined-required"
                label="Telefono"
                name="phone"
                value={userData.phone}
                onChange={handleInputChange}
              />
              <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                name="password"
                value={userData.password}
                autoComplete="current-password"
                onChange={handleInputChange}
              />
              <TextField
                id="outlined-password-input"
                label="Confirmar Password"
                type="password"
                autoComplete="current-password"
                name="passwordConfirm"
                value={userData.passwordConfirm}
                onChange={handleInputChange}
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

export default UserRegister;
