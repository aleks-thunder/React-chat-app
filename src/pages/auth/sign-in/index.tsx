import React from "react";

import { auth, provider } from "configs/firebase";
import { signInWithPopup } from "firebase/auth";

import Cookies from "universal-cookie";

const cookies = new Cookies();

export const Auth: React.FC<{ setIsAuth: React.Dispatch<boolean> }> = ({ setIsAuth }) => {
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      cookies.set("auth-token", result.user.refreshToken);
      setIsAuth(true);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="auth">
      <p>Sign in With Google To Continue</p>
      <button onClick={signInWithGoogle}>Sign in With Google</button>
    </div>
  );
};
