import React from "react";
import styles from "./footer.module.scss";
import github from "../../images/github.svg";
import dog from "../../images/dog_login.png";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.name_container}>
        <img src={dog} alt="" className={styles.dog} />
        <p>Nombre de la aplicación</p>
      </div>
      <div>
        <h3>Desarrollado por:</h3>
        <p>Nicolás Buitrago</p>
        <p>Andres Pavas</p>
      </div>
      <div>
        <div className={styles.container_git}>
          <h3>Github</h3>
          <img src={github} alt="github" className={styles.github} />
        </div>
        <a href="https://github.com/nicbuirod">https://github.com/nicbuirod</a>{" "}
        <br />
        <a href="https://github.com/pavas0921">https://github.com/pavas0921</a>
      </div>
    </div>
  );
};

export default Footer;
