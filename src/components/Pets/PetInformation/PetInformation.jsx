import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPetById, selectPetState } from "../../../store/slices/pet/petSlice";
import styles from "./pet_information.module.scss";
import Image from "../assets/perro.jpg";
import { ButtonPet } from "../../button-pet";
import {
  getProceduresByHistory,
  selectProcedureState,
} from "../../../store/slices/procedures/proceduresSlice";

const PetInformation = () => {
  const { id: idParam } = useParams();
  const dispatch = useDispatch();
  //const petData = useSelector(selectPetState) || {};
  const { pet } = useSelector(selectPetState) || {};
  const { loading } = useSelector(selectPetState) || {};
  const token = sessionStorage.getItem("token");

  useEffect(() => {
    dispatch(getPetById({ token, idParam }));
  }, []);

  useEffect(() => {
    if (!loading && pet && pet.history && pet.history.length > 0) {
      sessionStorage.setItem("idhistory", pet.history[0].idhistory);
      if (sessionStorage.getItem("idhistory")) {
        const idhistory = sessionStorage.getItem("idhistory");
        console.log("idhistory");
        dispatch(getProceduresByHistory({ token, idhistory }));
      }
    }
  }, [pet]);

  if (loading) {
    return <p>Cargando procedimientos...</p>;
  }

  return (
    <div className={styles.main}>
      <div className={styles.main__card}>
        <div className={styles.color_header}>
          <div className={styles.div_img}>
            <img
              className={styles.div_img__img_redonda}
              src={pet.pet_image}
              alt=""
            />
          </div>

          <div className={styles.div_info}>
            <div className={styles.div_info__title}>
              <h1>{pet.pet_name}</h1>
            </div>

            <div className={styles.div_info__details}>
              <div className={styles.div_info___detail}>
                <p>Genero: Hembra</p>
              </div>
              <div className={styles.div_info___detail}>
                <p>Raza: {pet.pet_race}</p>
              </div>
              <div className={styles.div_info___detail}>
                <p>Especie: {pet.pet_specie}</p>
              </div>
              <div className={styles.div_info___detail}>
                <p>Color: {pet.pet_color}</p>
              </div>
              <div className={styles.div_info___detail}>
                <p>Peso: {pet.pet_weight} Kg</p>
              </div>
              <div className={styles.div_info___detail}>
                Observaciones: jdhfksdjhfksjdhfksdjhfksdjhfksjdhf
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.button_menu}>
        <ButtonPet />
      </div>
    </div>
  );
};

export default PetInformation;
