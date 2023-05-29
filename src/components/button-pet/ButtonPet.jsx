import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import Modal from "@mui/material/Modal";
import "./button-pet.module.scss";

import styles from "./button-pet.module.scss";
import { VacunacionReg } from "../Vacunacion";
import { color } from "@mui/system";
import { red } from "@mui/material/colors";

function ButtonPet() {
  const [showButtons, setShowButtons] = useState(false);
  const [openConsult, setOpenConsult] = useState(false);
  const navigate = useNavigate();

  function handleClick() {
    setShowButtons(!showButtons);
  }

  function handleOpenConsultation() {
    setOpenConsult(true);
  }

  function handleCloseConsultation() {
    setOpenConsult(false);
  }

  return (
    <div className={styles.button_container_pet}>
      <button onClick={handleClick} className={styles.initial_button_pet}>
        <span class={styles.material_symbols_outlined}>
          <MenuIcon />
        </span>
      </button>
      {showButtons && (
        <div className={styles.option_button}>
          <button
            className={styles.option_button_pet}
            onClick={handleOpenConsultation}
          >
            Consulta
          </button>
          <Modal open={openConsult}>
            <div className={styles.modal_container}>
              <VacunacionReg handleClose={handleCloseConsultation} />
            </div>
          </Modal>
          {/* <button className="option-button" onClick={() => navigate("/follow")}>
            Seguimiento
          </button> */}
          <button
            className={styles.option_button_pet}
            onClick={() => navigate("/vacunacion")}
          >
            Vacunación
          </button>
          <button
            className={styles.option_button_pet}
            onClick={() => navigate("/desparasitacion")}
          >
            Desparacitación
          </button>
          {/* <button
            className="option-button-pet"
            onClick={() => navigate("/waitingroom")}
          >
            Sala de espera
          </button> */}
          <button
            className={styles.option_button_pet}
            onClick={() => navigate("/hospitalization")}
          >
            Hospitalización
          </button>
          {/* <button className="option-button-pet">
            <span class="material-symbols-outlined">attach_file</span>
          </button> */}
        </div>
      )}
    </div>
  );
}

export default ButtonPet;
