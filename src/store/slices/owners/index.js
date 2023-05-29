import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "ownerModal",
  initialState: {
    visible: false,
  },
  reducers: {
    setOwnerModalState: (state, action) => {
      state.visible = action.payload;
    },
  },
});

export const { setOwnerModalState } = modalSlice.actions;

export default modalSlice.reducer;
