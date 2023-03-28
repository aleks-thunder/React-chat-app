import { combineReducers } from "redux";

import user from "./user";
import chat from "./chat";

export const rootReducer = combineReducers({
  [user.name]: user.reducer,
  [chat.name]: chat.reducer,
});

export default rootReducer;
