import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import PetInformation from "./PetInformation/PetInformation";
import { PetHistory } from "./PetHistory";
import { selectProcedureState } from "../../store/slices/procedures/proceduresSlice";
import styles from "./Pet.module.scss";

const Pet = () => {
  const { procedure } = useSelector(selectProcedureState);
  const { loading } = useSelector(selectProcedureState);

  useEffect(() => {
    console.log(procedure);
  }, []);

  return (
    <div className={styles.pets}>
      <PetInformation></PetInformation>
      {loading ? (
        <p>Cargando procedimientos...</p>
      ) : procedure && procedure.length > 0 ? (
        <PetHistory />
      ) : null}
    </div>
  );
};

export { Pet };
