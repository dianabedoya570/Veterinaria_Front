import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getProceduresApi } from "../../../services/procedure";

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
      });
  },
});

export const selectProcedureState = (state) => state.procedure;

export default procedureSlice.reducer;
