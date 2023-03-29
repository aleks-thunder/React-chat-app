import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Message } from "types";
import { ChatItem, ChatState } from "./types.js";

const initialState: ChatState = {
  activeChat: {
    room: "",
    messageList: [],
  },
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
      state.activeChat.room = action.payload;
    },
    setMessageList: (state, action: PayloadAction<Message[]>) => {
      state.activeChat.messageList = action.payload;
    },
    setChatList: (state, action: PayloadAction<ChatItem[]>) => {
      state.chatList = action.payload;
    },
  },
});

export const { resetProfile, setActiveChat, setChatList, setMessageList } = userSlice.actions;
export default userSlice;
