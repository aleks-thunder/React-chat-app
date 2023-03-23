import { lazyLoad } from "utils/loadable";

export const AuthPage = lazyLoad(
  () => import("./auth"),
  module => module.default,
);

export const ChatPage = lazyLoad(
  () => import("./chat/chat"),
  module => module.default,
);
