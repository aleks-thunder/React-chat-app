import { combineReducers } from "redux";

import chat from "./chat";

export const rootReducer = combineReducers({
  [chat.name]: chat.reducer,
});

export default rootReducer;
