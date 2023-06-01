import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getProceduresApi,
  createProcedureAPI,
} from "../../../services/procedure";

const initialState = {
  procedure: [],
  loading: false,
};

export const getProceduresByHistory = createAsyncThunk(
  "pet/getPetProcedures",
  async ({ token, idhistory }) => {
    const data = await getProceduresApi(token, idhistory);
    return data;
  }
);

export const createProcedure = createAsyncThunk(
  "pet/createProcedure",
  async (body) => {
    const data = await createProcedureAPI(body);
    return data;
  }
);

export const procedureSlice = createSlice({
  name: "procedure",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProceduresByHistory.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProceduresByHistory.fulfilled, (state, action) => {
        state.loading = false;
        state.procedure = action.payload;
        console.log("from slice", state.procedure);
      });
  },
});

export const selectProcedureState = (state) => state.procedure;

export default procedureSlice.reducer;
