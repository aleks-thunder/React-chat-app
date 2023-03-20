import { lazyLoad } from "utils/loadable";

export const AuthPage = lazyLoad(
  () => import("./auth"),
  module => module.default,
);

export const ChatRoomPage = lazyLoad(
  () => import("./chat/chat-room"),
  module => module.default,
);

export const NewChatPage = lazyLoad(
  () => import("./chat/new-chat"),
  module => module.default,
);
