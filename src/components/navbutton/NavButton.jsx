import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "./nav-button.module.scss";
import AttachFileIcon from "@mui/icons-material/AttachFile";

function NavButton() {
  const [showButtons, setShowButtons] = useState(false);
  const navigate = useNavigate();

  function handleClick() {
    setShowButtons(!showButtons);
  }

  return (
    <div className={styles.button_container}>
      <button onClick={handleClick} className={styles.initial_button}>
        <MenuIcon />
      </button>
      {showButtons && (
        <div>
          {/* <button
            className={styles.option_button{styles.
            onClick={() => navigate({styles./new_consultation{styles.)}
          >
            Consulta
          </button> */}
          <button
            className={styles.option_button}
            onClick={() => navigate("/follow")}
          >
            Seguimiento
          </button>
          {/* <button
            className="option_button"
            onClick={() => navigate("/vacunacion")}
          >
            Vacunación
          </button> */}
          {/* <button
            className="option_button"
            onClick={() => navigate("/desparasitacion")}
          >
            Desparacitación
          </button> */}
          {/* <button
            className="option_button"
            onClick={() => navigate("/waitingroom")}
          >
            Sala de espera
          </button> */}
          {/* <button
            className="option_button"
            onClick={() => navigate("/hospitalization")}
          >
            Hospitalización
          </button> */}
          <button className={styles.option_button}>
            <AttachFileIcon />
          </button>
        </div>
      )}
    </div>
  );
}

export default NavButton;
