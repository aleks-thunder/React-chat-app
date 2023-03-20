import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

import { ROUTES } from "navigation/routes";

const NewChat: React.FC = () => {
  const roomInputRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();
  const onSubmit = () => {
    if (roomInputRef?.current?.value) {
      navigate("/" + ROUTES.chat + "/" + roomInputRef?.current?.value);
    }
  };

  return (
    <div>
      <label>Enter Room</label>
      <input ref={roomInputRef} />
      <button onClick={onSubmit}>Enter chat</button>
    </div>
  );
};

export default NewChat;
