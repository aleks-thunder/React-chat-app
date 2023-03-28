import React from "react";

import { Navigate, Route, Routes } from "react-router-dom";
import { ROUTES } from "./routes";

import { AuthPage, ChatPage } from "pages";
import { TokenHandler } from "./components";
import { NotFoundPage } from "components";

const Navigation: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={ROUTES.chat} />} />

      <Route path={ROUTES.login}>
        <Route index element={<AuthPage />} />
      </Route>

      <Route path={`${ROUTES.chat}`}>
        <Route
          index
          element={
            <TokenHandler>
              <ChatPage />
            </TokenHandler>
          }
        />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Navigation;
