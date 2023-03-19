import { createSlice } from "@reduxjs/toolkit";
import { UserState } from "./types.js";

const initialState: UserState = {
  error: null,
  pending: false,
  user: null,
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
  },
});

export const { resetProfile } = userSlice.actions;
export default userSlice;
