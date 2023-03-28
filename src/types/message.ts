import { CreatedAt } from "store/chat/types";

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
