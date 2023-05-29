import { createSlice } from "@reduxjs/toolkit";

export const userControlSlice = createSlice({
  name: "owner",
  initialState: {
    list: {},
    listNames: {},
  },
  reducers: {
    setOwnerState: (state, action) => {
      state.list = action.payload;
    },
    setListNames: (state, action) => {
      state.listNames = action.payload;
    },
  },
});

export const { setOwnerState } = userControlSlice.actions;
export const { setListNames } = userControlSlice.actions;

export default userControlSlice.reducer;
