import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { registerHistoryAPI } from "../../../services/history";

const initialState = {
  history: [],
  loading: false,
};

export const createHistory = createAsyncThunk(
  "history/createHistory",
  async (body) => {
    const data = await registerHistoryAPI(body);
    return data;
  }
);

export const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createHistory.pending, (state) => {
        state.loading = true;
      })
      .addCase(createHistory.fulfilled, (state, action) => {
        state.loading = false;
        state.history = action.payload;
      });
  },
});

export const selectHistoryState = (state) => state.history;
//export const selectUserData = (state) => state.pet.pet;

export default historySlice.reducer;
