import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProceduresByHistory,
  selectProcedureState,
} from "../../../store/slices/procedures/proceduresSlice";
import NavButton from "../../navbutton/NavButton";
import styles from "./pet-history.module.scss";
import TagIcon from "@mui/icons-material/Tag";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";
import ScheduleIcon from "@mui/icons-material/Schedule";

const PetHistory = () => {
  let token = "";
  let idhistory = "";
  const { procedure } = useSelector(selectProcedureState);
  const { loading } = useSelector(selectProcedureState);
  const dispatch = useDispatch();

  useEffect(() => {
    token = sessionStorage.getItem("token");
    idhistory = sessionStorage.getItem("idhistory");
  }, [dispatch, token, idhistory]);

  useEffect(() => {}, [procedure, loading, idhistory]);

  if (loading) {
    return <p>Cargando procedimientos...</p>;
  }

  return (
    <div className={styles.history}>
      {procedure.length >= 1 &&
        procedure.map((item) => (
          <div className={styles.history__events_div} key={item.idprocedure}>
            <div className={styles.history_info}>
              <div className={styles.history_info__details}>
                <span>
                  <TagIcon />
                </span>
                <p>Numero de consulta: {item.idprocedure}</p>
              </div>
              <div className={styles.history_info__details}>
                <span className={styles.material_symbols_outlined}>
                  <CalendarTodayIcon />
                </span>
                <p>Fecha: {item.start_date}</p>
              </div>
              <div className={styles.history_info__details}>
                <span className={styles.material_symbols_outlined}>
                  <MedicalInformationIcon />
                </span>
                <p>
                  Profesional: {item.person.name} {item.person.last_name}
                </p>
              </div>
              <div className={styles.history_info__details}>
                <span className={styles.material_symbols_outlined}>
                  <ScheduleIcon />
                </span>
                <p>Hora: 10:30</p>
              </div>
            </div>
            <div className={styles.history_container}>
              <div className={styles.history_event}>
                <div className={styles.history_event__reason}>
                  <p>Motivo de consulta:</p>
                </div>

                <div className={styles.history_event__title}>
                  <p>{item.procedure_title}</p>
                </div>

                <div className={styles.history_event__detail}>
                  <p>{item.procedure_detail}</p>
                </div>
              </div>
              <div className={styles.history_buttons}>
                <NavButton />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default PetHistory;
