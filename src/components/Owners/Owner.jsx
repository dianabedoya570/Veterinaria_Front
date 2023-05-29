// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { loadOwnersByName } from "../../services/loadOwners";
import { Information } from "./information";
import styles from "./owner.module.scss";
import logo from "../../images/dog_login.png";
import SearchIcon from "@mui/icons-material/Search";
import { useSelector } from "react-redux";
import { PetModal } from "./PetModal";
import { useDispatch } from "react-redux";

const Owner = () => {
  const dispatch = useDispatch();
  const { visible: modal } = useSelector((state) => state.ownerModal);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    dispatch(loadOwnersByName(inputValue));
  };

  return (
    <div className={styles.container}>
      {modal && <PetModal />}
      <div className={styles.header}>
        <div className={styles.header_information}>
          <img src={logo} alt="logo" className={styles.pet_header} />
          <h2 className={styles.title}>Nombre de aplicación</h2>
          <div className={styles.container_search}>
            <input
              className={styles.search}
              type="text"
              placeholder="Buscar"
              value={inputValue}
              onChange={handleInputChange}
            />
            <button
              className={styles.button_search}
              onClick={handleButtonClick}
            >
              <SearchIcon />
            </button>
          </div>
        </div>
      </div>
      <Information />
    </div>
  );
};

export default Owner;
