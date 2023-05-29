import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./menu.module.scss";
import user from "../../images/user.png";
import owner from "../../images/ouner.png";
import pug from "../../images/pug.png";
import huellas from "../../images/huellas.png";
import niño from "../../images/niño.png";

function Menu() {
  const navigate = useNavigate();
  return (
    <nav className={styles.button_container_menu}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <button
            className={styles.button_page}
            onClick={() => navigate("/users")}
          >
            <h2 className={styles.text_menu}>Registro de usuario</h2>
            <img src={user} alt="page" className={styles.image_button} />
          </button>
        </li>
        {/* <li className={styles.item}>
          <button
            className={styles.button_page}
            onClick={() => navigate("/owners-register")}
          >
            <h2 className={styles.text_menu}>Registro de propietarios</h2>
            <img src={owner} alt="page" className={styles.image_button} />
          </button>
        </li> */}
        <li className={styles.item}>
          <button
            className={styles.button_page}
            onClick={() => navigate("/pets-register")}
          >
            <h2 className="styles.text-menu">Registro de mascotas</h2>
            <img src={huellas} alt="page" className={styles.image_button} />
          </button>
        </li>
        <li className={styles.item}>
          <button
            className={styles.button_page}
            onClick={() => navigate("/owners")}
          >
            <h2 className={styles.text_menu}>Propietarios</h2>
            <img src={niño} alt="page" className={styles.image_button} />
          </button>
        </li>
        <li className={styles.item}>
          <button
            className={styles.button_page}
            onClick={() => navigate("/pets")}
          >
            <h2 className={styles.text_menu}>Mascotas</h2>
            <img src={pug} alt="page" className={styles.image_button} />
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
