import { createSlice } from "@reduxjs/toolkit";

export const userControlSlice = createSlice({
  name: "owner",
  initialState: {
    list: {},
    listNames: [],
    idOwner: "",
    ownerPets: [],
    modalPerson: false,
    ownerInformation: {},
    editPet: false,
    idPet: "",
    petInformation: {},
  },
  reducers: {
    setOwnerState: (state, action) => {
      state.list = action.payload;
    },
    setListNames: (state, action) => {
      state.listNames = action.payload;
    },
    setIdOwner: (state, action) => {
      state.idOwner = action.payload;
    },
    setOwnerPets: (state, action) => {
      state.ownerPets = action.payload;
    },
    setModalPerson: (state, action) => {
      state.modalPerson = action.payload;
    },
    setOwnerInformation: (state, action) => {
      state.ownerInformation = action.payload;
    },
    setEditPet: (state, action) => {
      state.editPet = action.payload;
    },
    setIdPet: (state, action) => {
      state.idPet = action.payload;
    },
    setPetInformation: (state, action) => {
      state.petInformation = action.payload;
    },
  },
});

export const { setOwnerState } = userControlSlice.actions;
export const { setListNames } = userControlSlice.actions;
export const { setIdOwner } = userControlSlice.actions;
export const { setOwnerPets } = userControlSlice.actions;
export const { setModalPerson } = userControlSlice.actions;
export const { setOwnerInformation } = userControlSlice.actions;
export const { setEditPet } = userControlSlice.actions;
export const { setIdPet } = userControlSlice.actions;
export const { setPetInformation } = userControlSlice.actions;

export default userControlSlice.reducer;
