import axios from "axios";
import {
  setOwnerState,
  setListNames,
  setOwnerPets,
  setOwnerInformation,
  setPetInformation,
} from "../store/slices/ownersControl";

export const loadOwners = (page) => async (dispatch) => {
  const token = sessionStorage.getItem("token");
  await axios
    .get(
      `https://vetapp-backend-production.up.railway.app/person?page=${page}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((data) => {
      dispatch(setOwnerState(data.data));
    });
};

export const loadOwnersByName = (name) => async (dispatch) => {
  const token = sessionStorage.getItem("token");
  try {
    await axios
      .get(
        `https://vetapp-backend-production.up.railway.app/person/name/${name}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((data) => {
        if (data) {
          dispatch(setListNames(data.data.data));
        } else {
          console.log("no hay datos");
        }
      });
  } catch (error) {
    console.log(error);
  }
};

export const loadPets = (idperson) => async (dispatch) => {
  const token = sessionStorage.getItem("token");
  try {
    await axios
      .get(
        `https://vetapp-backend-production.up.railway.app/pet/person/${idperson}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((data) => {
        if (data) {
          dispatch(setOwnerPets(data.data));
        } else {
          console.log("no hay datos");
        }
      });
  } catch (error) {
    console.log(error);
  }
};

//person by id

export const loadPersonId = (id) => async (dispatch) => {
  const token = sessionStorage.getItem("token");
  try {
    await axios
      .get(`https://vetapp-backend-production.up.railway.app/person/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((data) => {
        if (data) {
          dispatch(setOwnerInformation(data.data));
        } else {
          console.log("no hay datos");
        }
      });
  } catch (error) {
    console.log(error);
  }
};

//update person

export const updatePersonId = async (
  idperson,
  name,
  identification,
  email,
  image,
  last_name,
  phone
) => {
  const token = sessionStorage.getItem("token");
  const id = +idperson;
  console.log("en update");
  try {
    await axios.put(
      `https://vetapp-backend-production.up.railway.app/person/${id}`,
      {
        name: name,
        identification: identification,
        email: email,
        image: image,
        last_name: last_name,
        phone: phone,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};

//get pet by id

export const loadPetById = (id) => async (dispatch) => {
  const token = sessionStorage.getItem("token");
  try {
    await axios
      .get(`https://vetapp-backend-production.up.railway.app/pet/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((data) => {
        if (data) {
          dispatch(setPetInformation(data.data));
          console.log("petinfo", data.data);
        } else {
          console.log("no hay datos");
        }
      });
  } catch (error) {
    console.log(error);
  }
};

//edit pet

export const updatePetId = async (
  idpet,
  pet_name,
  pet_color,
  pet_age,
  pet_image,
  pet_race,
  pet_specie,
  pet_weight,
  pet_status
) => {
  const token = sessionStorage.getItem("token");
  const id = +idpet;
  console.log("en update");
  try {
    await axios.put(
      `https://vetapp-backend-production.up.railway.app/pet/${id}`,
      {
        pet_name: pet_name,
        pet_color: pet_color,
        pet_age: +pet_age,
        pet_image: pet_image,
        pet_race: pet_race,
        pet_specie: pet_specie,
        pet_weight: pet_weight,
        pet_status: pet_status,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};
