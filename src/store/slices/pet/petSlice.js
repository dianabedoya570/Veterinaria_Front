import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPetByIdApi } from "../../../services/pet";

const initialState = {
  pet: [],
  loading: false,
};

export const getPetById = createAsyncThunk(
  "pet/getPetById",
  async ({ token, idParam }) => {
    const data = await getPetByIdApi(token, idParam);
    return data;
  }
);

export const petSlice = createSlice({
  name: "pet",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPetById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPetById.fulfilled, (state, action) => {
        state.loading = false;
        state.pet = action.payload;
      });
  },
});

export const selectPetState = (state) => state.pet;
export const selectUserData = (state) => state.pet.pet;

export default petSlice.reducer;
