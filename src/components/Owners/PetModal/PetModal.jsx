import React, { useEffect } from "react";
import styles from "./pet-modal.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Button from "@mui/material/Button";
import PetsIcon from "@mui/icons-material/Pets";
import { useDispatch, useSelector } from "react-redux";
import { setOwnerModalState } from "../../../store/slices/owners";
import { loadPets } from "../../../services/loadOwners";
import { useNavigate } from "react-router-dom";
import { setEditPet } from "../../../store/slices/ownersControl";
import { setIdPet } from "../../../store/slices/ownersControl";
import { updatePetStatus } from "../../../services/loadOwners";

const PetModal = () => {
  const { idOwner } = useSelector((state) => state.owner);
  const { ownerPets } = useSelector((state) => state.owner);

  const id = +idOwner;
  const pets = ownerPets || [];
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(loadPets(id));
  }, [id]);

  const handleClickNew = () => {
    navigate("/pets-register");
  };

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
                {pets.map(({ idpet, pet_name, pet_image }, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <img className={styles.img} src={pet_image} alt="" />
                      </td>
                      <td>{pet_name}</td>
                      <td className={styles.edit}>
                        <button
                          className={styles.button}
                          onClick={() => {
                            dispatch(setEditPet(true));
                            dispatch(setOwnerModalState(false));
                            dispatch(setIdPet(idpet));
                          }}
                        >
                          <EditIcon />
                        </button>
                      </td>

                      <td>
                        <button
                          className={styles.button_pet}
                          onClick={() => {
                            //console.log(`/pets/${idpet}`);
                            navigate(`/pets/${idpet}`);
                          }}
                        >
                          <PetsIcon />
                        </button>
                      </td>
                      <td>
                        <button
                          className={styles.button_delete}
                          onClick={() => {
                            updatePetStatus(idpet);
                            dispatch(setOwnerModalState(false));
                          }}
                        >
                          <DeleteForeverIcon />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </table>
              <div className={styles.button_new_container}>
                <Button
                  variant="contained"
                  className={styles.button_create}
                  onClick={handleClickNew}
                >
                  Nueva mascota
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PetModal;
