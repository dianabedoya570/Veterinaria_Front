// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import styles from "./information.module.scss";
import { loadOwners } from "../../../services/loadOwners";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import PetsIcon from "@mui/icons-material/Pets";
import { setOwnerModalState } from "../../../store/slices/owners";
import { useDispatch, useSelector } from "react-redux";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import { setIdOwner } from "../../../store/slices/ownersControl";
import { setListNames } from "../../../store/slices/ownersControl";
import { setModalPerson } from "../../../store/slices/ownersControl";
import { updatePersonStatus } from "../../../services/loadOwners";

const Information = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadOwners(1));
  }, [dispatch]);
  const { list } = useSelector((state) => state.owner);

  const [information, setInformation] = useState(list.data || []);
  const { listNames } = useSelector((state) => state.owner);

  const data = list.data || [];
  const listSearch = listNames || [];

  const page = list.page || "";
  const totalPages = list.totalPages || "";
  const nextPage = +page + 1;
  const previousPage = +page - 1;

  useEffect(() => {
    setInformation(data);
  }, [data]);
  useEffect(() => {
    if (listSearch.length >= 1) {
      setInformation(listSearch);
    }
    if (listNames === undefined) {
      setInformation(data);
      dispatch(setListNames([]));
      alert("Sin coincidencias");
    }
    if (listSearch.length === 0) {
      setInformation(data);
    }
    if (listSearch[0] === 1) {
      dispatch(loadOwners(1));
    }
  }, [listNames]);

  console.log(totalPages);
  return (
    <div className={styles.container}>
      <div className={styles.table_container}>
        <table className={styles.table}>
          <tr className={styles.column}>
            <th>Photo</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Identificación</th>
            <th>Correo</th>
            <th>Telefono</th>
            <th>Editar</th>
            <th>Mascotas</th>
            <th>Eliminar</th>
          </tr>

          {information.map(
            (
              {
                image,
                last_name,
                email,
                identification,
                phone,
                name,
                idperson,
              },
              index
            ) => {
              return (
                <tr key={index}>
                  <td>
                    <img className={styles.image_user} src={image} alt="" />
                  </td>
                  <td>{name}</td>
                  <td>{last_name}</td>
                  <td>{identification}</td>
                  <td>{email}</td>
                  <td>{phone}</td>
                  <td>
                    <button
                      className={styles.button}
                      onClick={() => {
                        dispatch(setModalPerson(true));
                        dispatch(setIdOwner(idperson));
                      }}
                    >
                      <EditIcon />
                    </button>
                  </td>

                  <td>
                    <button
                      className={styles.button_pet}
                      onClick={() => {
                        dispatch(setOwnerModalState(true));
                        dispatch(setIdOwner(idperson));
                      }}
                    >
                      <PetsIcon />
                    </button>
                  </td>
                  <td>
                    <button
                      className={styles.button_delete}
                      onClick={() => {
                        updatePersonStatus(idperson);
                        dispatch(setListNames([1]));
                      }}
                    >
                      <DeleteForeverIcon />
                    </button>
                  </td>
                </tr>
              );
            }
          )}
        </table>
        <div className={styles.buttons}>
          <button
            className={styles.page_button}
            onClick={() => {
              if (page < totalPages) {
                dispatch(loadOwners(nextPage));
              }
            }}
          >
            <SkipNextIcon className={styles.symbol_button} />
          </button>
          {`página ${page}`}
          <button
            className={styles.page_button}
            onClick={() => {
              if (page > 1) {
                dispatch(loadOwners(previousPage));
              }
            }}
          >
            <SkipPreviousIcon className={styles.symbol_button} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Information;
