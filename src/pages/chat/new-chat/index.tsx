import React, { useRef } from "react";

export const NewChat: React.FC<{ setRoom: React.Dispatch<React.SetStateAction<string | null>> }> = ({ setRoom }) => {
  const roomInputRef = useRef<HTMLInputElement>(null);

  const onSubmit = () => {
    if (roomInputRef?.current?.value) {
      setRoom(roomInputRef?.current?.value);
    }
  };

  return (
    <div className="room">
      <label>Enter Room</label>
      <input ref={roomInputRef} />
      <button onClick={onSubmit}>Enter chat</button>
    </div>
  );
};
