export type Message = {
  id: string;
  room: string;
  message: string;
  isPrevMessageSameUID: boolean;
  user: UserData;
  createdAt: CreatedAt;
};

type CreatedAt = {
  seconds: number;
  nanoseconds: number;
};

type UserData = {
  userName: string;
  photoURL: string;
  uid: string;
};
