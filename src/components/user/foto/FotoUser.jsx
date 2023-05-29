import React from "react";
import styles from "./foto.module.scss";
import { useSelector } from "react-redux";

const FotoUser = () => {
  const { uploadUser: photoUser } = useSelector((state) => state.photo);
  return (
    <div className={styles.foto}>
      <img src={photoUser} alt="Foto usuario" />
    </div>
  );
};

export default FotoUser;
