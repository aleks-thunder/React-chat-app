import { Auth } from "pages/auth";
import React from "react";
import { Route, Routes } from "react-router-dom";

import { ROUTES } from "./routes";

// import { NotFoundPage } from "components";

// TODO detect browser language and redirect to desired url

const Navigation: React.FC = () => {
  return (
    <Routes>
      <Route path={ROUTES.home}>
        <Route index element={<Auth />} />
      </Route>

      {/* <Route path="*" element={<NotFoundPage />} /> */}
    </Routes>
  );
};

export default Navigation;
