import React from "react";

import styles from "./Pet.module.scss";

import PetInformation from "./PetInformation/PetInformation";
import { PetHistory } from "./PetHistory";

const Pet = () => {
  return (
    <div className={styles.pets}>
      <PetInformation></PetInformation>

      <PetHistory></PetHistory>
    </div>
  );
};

export { Pet };
