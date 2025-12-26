import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    persistAuth: (state, {payload}) => {
      //persist user data
      state.user = payload?.user;

      //persist token
      state.token = payload?.accessToken ?? payload?.data?.accessToken;
    },
    removeUser: (state) => {
      state.user = null;
      state.token = null
    },
  },
});

export default authSlice.reducer;
export const { removeUser, persistAuth } = authSlice.actions;