import React from "react";

import { Navigate, Route, Routes } from "react-router-dom";
import { ROUTES, ROUTE_PARAMS } from "./routes";

import { AuthPage, ChatRoomPage, NewChatPage } from "pages";
import { TokenHandler } from "./components";
import { NotFoundPage } from "components";

// TODO - 404
const Navigation: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={ROUTES.new_chat} />} />

      <Route path={ROUTES.login}>
        <Route index element={<AuthPage />} />
      </Route>

      <Route path={ROUTES.new_chat}>
        <Route
          index
          element={
            <TokenHandler>
              <NewChatPage />
            </TokenHandler>
          }
        />
      </Route>

      <Route path={`${ROUTES.chat}/:${ROUTE_PARAMS.room}`}>
        <Route
          index
          element={
            <TokenHandler>
              <ChatRoomPage />
            </TokenHandler>
          }
        />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Navigation;
