import axios from "axios";

export const getPetByIdApi = async (token, idpet) => {
  try {
    const request = await fetch(
      `https://vetapp-backend-production.up.railway.app/pet/${idpet}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await request.json();
    return Promise.resolve(data);
  } catch (error) {
    console.log(error);
  }
};

//create pet

export const createPet = async (
  pet_name,
  pet_color,
  pet_age,
  pet_race,
  pet_specie,
  pet_weight,
  pet_image,
  pet_status,
  idperson
) => {
  try {
    const token = sessionStorage.getItem("token");

    await axios.post(
      `https://vetapp-backend-production.up.railway.app/pet`,
      {
        pet_name: pet_name,
        pet_color: pet_color,
        pet_age: +pet_age,
        pet_race: pet_race,
        pet_specie: pet_specie,
        pet_weight: +pet_weight,
        pet_image: pet_image,
        pet_status: +pet_status,
        idperson: +idperson,
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
