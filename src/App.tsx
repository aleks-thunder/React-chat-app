import React, { useState } from "react";

import { Auth } from "pages/auth/sign-in";
// TODO
// import logo from "./logo.svg";
import "./App.scss";

import Cookies from "universal-cookie";
import { ChatRoom } from "pages/chat/chat-room";
import { NewChat } from "pages/chat/new-chat";

const cookies = new Cookies();

function App() {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
  const [room, setRoom] = useState<string | null>(null);

  return (
    <>
      {!isAuth ? (
        <div>
          <Auth setIsAuth={setIsAuth} />
        </div>
      ) : room ? (
        <ChatRoom />
      ) : (
        <NewChat setRoom={setRoom} />
      )}
    </>
  );
}

export default App;
