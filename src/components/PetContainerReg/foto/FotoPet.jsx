import React from "react";
import styles from "./foto.module.scss";
import { useSelector } from "react-redux";

const FotoPet = () => {
  const { upload: photoPet } = useSelector((state) => state.photo);
  return (
    <div className={styles.foto}>
      <img src={photoPet} alt="Foto mascota" />
    </div>
  );
};

export default FotoPet;
