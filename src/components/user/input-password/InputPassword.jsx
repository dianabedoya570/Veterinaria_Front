import React from "react";
import styles from "./inputPassword.module.scss";

const InputPassword = ({ label }) => {
  return (
    <div className={styles.password}>
      {/* <label htmlFor="password">{label}</label> */}
      <input
        type="password"
        id="password"
        name="password"
        className={styles.input_password}
        placeholder={label}
      />
    </div>
  );
};

export default InputPassword;
