import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import PetInformation from "./PetInformation/PetInformation";
import { PetHistory } from "./PetHistory";
//import { selectProcedureState } from "../../store/slices/procedures/proceduresSlice";
import styles from "./Pet.module.scss";
import { Loader } from "../Loader";

const Pet = () => {
  //const { procedure } = useSelector(selectProcedureState);
  //const { loading } = useSelector(selectProcedureState);

  return (
    <div className={styles.pets}>
      <PetInformation></PetInformation>

      <PetHistory />
    </div>
  );
};

export { Pet };
