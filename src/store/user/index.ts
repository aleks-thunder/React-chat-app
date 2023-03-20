import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState } from "./types.js";

const initialState: UserState = {
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: {
    ...initialState,
  },
  reducers: {
    resetProfile: () => {
      return initialState;
    },
    setAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
  },
});

export const { resetProfile, setAuth } = userSlice.actions;
export default userSlice;
