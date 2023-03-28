import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ChatItem, ChatState } from "./types.js";

const initialState: ChatState = {
  activeChat: "",
  chatList: [],
};

const userSlice = createSlice({
  name: "chat",
  initialState: {
    ...initialState,
  },
  reducers: {
    resetProfile: () => {
      return initialState;
    },
    setActiveChat: (state, action: PayloadAction<string>) => {
      state.activeChat = action.payload;
    },
    setChatList: (state, action: PayloadAction<ChatItem[]>) => {
      state.chatList = action.payload;
    },
  },
});

export const { resetProfile, setActiveChat, setChatList } = userSlice.actions;
export default userSlice;
