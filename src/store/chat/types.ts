export type ChatState = {
  activeChat: string;
  chatList: ChatItem[];
};

export type ChatItem = {
  room: string;
  createdAt: CreatedAt;
  uid: string;
  id: string;
};

export type CreatedAt = {
  seconds: number;
  nanoseconds: number;
};
