import axios from "axios";
import { setOwnerState, setListNames } from "../store/slices/ownersControl";

export const loadOwners = (page) => async (dispatch) => {
  const token = sessionStorage.getItem("token");
  await axios
    .get(`http://localhost:4000/person?page=${page}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((data) => {
      dispatch(setOwnerState(data.data));
    });
};

export const loadOwnersByName = (name) => async (dispatch) => {
  const token = sessionStorage.getItem("token");
  try {
    await axios
      .get(`http://localhost:4000/person/name/${name}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((data) => {
        if (data) {
          dispatch(setListNames(data.data.data));
          console.log(data.data.data);
        } else {
          console.log("no hay datos");
        }
      });
  } catch (error) {
    console.log(error);
  }
};
