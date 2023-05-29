import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { registerPersonAPI } from "../../../services/person";

const initialState = {
  person: [],
  loading: false,
};

export const CreatePerson = createAsyncThunk("person/create", async (body) => {
  const data = await registerPersonAPI(body);
  console.log("data from thunk***", data);
  return data;
});

export const PersonSlice = createSlice({
  name: "person",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(CreatePerson.pending, (state) => {
        state.loading = true;
      })
      .addCase(CreatePerson.fulfilled, (state, action) => {
        state.loading = false;
        state.person = action.payload;
      });
  },
});

export const selectPersonState = (state) => state.person;
export default PersonSlice.reducer;
