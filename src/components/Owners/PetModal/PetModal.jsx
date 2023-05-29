import React from "react";
import styles from "./pet-modal.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Button from "@mui/material/Button";
import PetsIcon from "@mui/icons-material/Pets";
import { useDispatch } from "react-redux";
import { setOwnerModalState } from "../../../store/slices/owners";

const PetModal = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.modal_container}>
      <div className={styles.window_modal}>
        <button
          className={styles.close}
          onClick={() => dispatch(setOwnerModalState(false))}
        >
          <CloseIcon />
        </button>
        <div>
          <div className={styles.container}>
            <div className={styles.table_container}>
              <table className={styles.table}>
                <tr className={styles.column}>
                  <th>Foto</th>
                  <th>Nombre</th>
                  <th>Editar</th>
                  <th>Abrir</th>
                  <th>Eliminar</th>
                </tr>
                <tr className={styles.column}>
                  <td>
                    <img className={styles.photo_user} src={""} alt="mascota" />
                  </td>
                  <td>maximus</td>
                  <td className={styles.edit}>
                    <button className={styles.button}>
                      <EditIcon />
                    </button>
                  </td>

                  <td>
                    <button
                      className={styles.button_pet}
                      onClick={() => dispatch(setOwnerModalState(true))}
                    >
                      <PetsIcon />
                    </button>
                  </td>
                  <td>
                    <button className={styles.button_delete}>
                      <DeleteForeverIcon />
                    </button>
                  </td>
                </tr>
              </table>
              <Button variant="contained" className={styles.button_create}>
                Crear
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PetModal;
