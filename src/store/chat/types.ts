import { Message } from "types";

export type ChatState = {
  activeChat: {
    room: string;
    messageList: Message[];
  };
  chatList: ChatItem[];
};

export type ChatItem = {
  room: string;
  createdAt: CreatedAt;
  uid: string;
  id: string;
  chatPhoto?: string;
};

export type CreatedAt = {
  seconds: number;
  nanoseconds: number;
};
