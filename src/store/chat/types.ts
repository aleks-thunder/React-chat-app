export type ChatState = {
  activeChat: {
    room: string;
    messageList: Message[];
  };
  chatList: ChatItem[];
};

export type Message = {
  id: string;
  room: string;
  message: string;
  isPrevMessageSameUID: boolean;
  user: UserData;
  createdAt: CreatedAt;
};

type UserData = {
  userName: string;
  photoURL: string;
  uid: string;
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
