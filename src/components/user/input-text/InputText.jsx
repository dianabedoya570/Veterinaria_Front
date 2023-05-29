import React from "react";
import styles from "./inputText.module.scss";

const InputText = ({ label }) => {
  return (
    <div className={styles.input__user}>
      {/* <label htmlFor={label} className={styles.input__user__label}>
        {label}
      </label> */}
      <input
        type="text"
        id={label}
        name={label}
        className={styles.input__user__input}
        placeholder={label}
      />
    </div>
  );
};

export default InputText;
