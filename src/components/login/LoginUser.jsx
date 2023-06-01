import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Login,
  selectUserData,
  selectLoginState,
} from "../../store/slices/login/loginSlice";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Loader } from "../Loader";
import { useNavigate } from "react-router-dom";
import styles from "./login.module.scss";
import stylesLoader from "../Loader/loader.scss";
import Dog from "../../images/dog_login.png";

const LoginUser = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const payload = useSelector(selectUserData) || {};
  const { loading } = useSelector(selectLoginState) || false;
  const { idperson, name, last_name, status, email, token, image, idrol } =
    payload || "";

  const navigate = useNavigate();
  const [typeUser, setTypeUser] = React.useState("usuario");
  const handleUser = (event, newTypeUser) => {
    setTypeUser(newTypeUser);
  };

  useEffect(() => {
    console.log(loading);
    if (token) {
      sessionStorage.setItem("idperson", idperson);
      sessionStorage.setItem("name", name);
      sessionStorage.setItem("lastname", last_name);
      sessionStorage.setItem("status", status);
      sessionStorage.setItem("email", email);
      sessionStorage.setItem("token", token);
      sessionStorage.setItem("image", image);
      sessionStorage.setItem("idrol", idrol);
      goToFavs();
      console.log("logged");
      console.log(payload);
    }
  }, [token, loading]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(Login(credentials));
    //navigate("/loby");
  }

  const goToFavs = () => {
    navigate("/loby");
  };

  return (
    <div className={styles.login}>
      {loading && (
        <div className={styles.loader_overlay}>
          <Loader />
        </div>
      )}
      <div className={styles.login_container}>
        <div className={styles.back_image}>
          <img src={Dog} alt="logo" className={styles.login_img} />
        </div>

        <div className={styles.container}>
          <div className={styles.user_type}></div>
          <h1 className={styles.login_h1}>Login</h1>
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
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.container_input}>
              <Box
                className={styles.inputs}
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
                  label="Correo"
                  type="email"
                  name="email"
                  value={credentials.email}
                  onChange={handleInputChange}
                />
                <TextField
                  id="outlined-password-input"
                  label="Password"
                  type="password"
                  name="password"
                  value={credentials.password}
                  onChange={handleInputChange}
                  autoComplete="current-password"
                />
              </Box>
            </div>
            <Button className={styles.button} type="submit" variant="contained">
              Ingresar
            </Button>
            <div className={styles.password_change}>
              <a href="http://">Olvidaste tu contraseña?</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginUser;
