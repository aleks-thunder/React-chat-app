import React from "react";
import { useNavigate } from "react-router-dom";

import { signInWithPopup } from "firebase/auth";

import { Button, Page, Text } from "components";

import { FIREBASE, LOCAL_STORAGE_KEYS } from "configs";
import { ROUTES } from "navigation/routes";

const AuthPage: React.FC = () => {
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(FIREBASE.auth, FIREBASE.provider);
      localStorage.setItem(LOCAL_STORAGE_KEYS.token, result.user.refreshToken);
      navigate("/" + ROUTES.chat);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Page>
      <Text mb="50px" textScale="header" fontWeight="bold">
        Sign in With Google To Continue
      </Text>
      <Button onClick={signInWithGoogle}>Sign in With Google</Button>
    </Page>
  );
};

export default AuthPage;
