import React from "react";

import { useAppDispatch } from "store/store";
import { setAuth } from "store/user";

import { signInWithPopup } from "firebase/auth";
import { FIREBASE, LOCAL_STORAGE_KEYS } from "configs";

const AuthPage: React.FC = () => {
  const dispatch = useAppDispatch();

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(FIREBASE.auth, FIREBASE.provider);
      localStorage.setItem(LOCAL_STORAGE_KEYS.token, result.user.refreshToken);
      dispatch(setAuth(true));
    } catch (err) {
      dispatch(setAuth(false));
      console.error(err);
    }
  };

  return (
    <div>
      <p>Sign in With Google To Continue</p>
      <button onClick={signInWithGoogle}>Sign in With Google</button>
    </div>
  );
};

export default AuthPage;
