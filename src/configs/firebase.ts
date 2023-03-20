import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAVIkGvCbfTArhuyxqqxGvT4e-fW0F-qPw",
  authDomain: "react-chat-3742e.firebaseapp.com",
  projectId: "react-chat-3742e",
  storageBucket: "react-chat-3742e.appspot.com",
  messagingSenderId: "230996736477",
  appId: "1:230996736477:web:e9405886ff984fb0795e34",
  measurementId: "G-Q73HWEPZG1",
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const FIREBASE = {
  auth: getAuth(app),
  provider: new GoogleAuthProvider(),
  db: getFirestore(app),
};
