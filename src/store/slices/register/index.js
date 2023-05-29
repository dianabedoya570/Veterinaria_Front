import { createSlice } from "@reduxjs/toolkit";

export const photoSlice = createSlice({
  name: "photo",
  initialState: {
    upload: {},
    uploadUser: {},
  },
  reducers: {
    setPhotoPet: (state, action) => {
      state.upload = action.payload;
    },
    setPhotoUser: (state, action) => {
      state.uploadUser = action.payload;
    },
  },
});

export const { setPhotoPet, setPhotoUser } = photoSlice.actions;

export default photoSlice.reducer;
