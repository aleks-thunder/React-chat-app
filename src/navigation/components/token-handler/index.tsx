import React, { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";

import { ROUTES } from "navigation/routes";
import { LOCAL_STORAGE_KEYS } from "configs";

const TokenHandler: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const token = localStorage.getItem(LOCAL_STORAGE_KEYS.token);
  if (!token) {
    return <Navigate to={"/" + ROUTES.login} replace />;
  }

  return <>{children}</>;
};

export default TokenHandler;
