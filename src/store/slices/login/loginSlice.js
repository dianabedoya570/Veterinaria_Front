import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginAPI } from "../../../services/login";

const initialState = {
  loading: false,
  userData: null,
};

export const Login = createAsyncThunk("user/login", async (credentials) => {
  const data = await loginAPI(credentials);
  return data;
});

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(Login.pending, (state) => {
        state.loading = true;
      })
      .addCase(Login.fulfilled, (state, action) => {
        state.loading = false;
        state.userData = action.payload;
      });
  },
});

export const selectLoginState = (state) => state.login;
export const selectUserData = (state) => state.login.userData;

export default loginSlice.reducer;
