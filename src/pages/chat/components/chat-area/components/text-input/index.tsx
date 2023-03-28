import React, { useState, useEffect, useRef, KeyboardEvent } from "react";

import { Flex } from "components";
import { TextArea } from "./styled";

import { useFirebase } from "hooks";

const TextInput: React.FC = () => {
  const [newMessage, setNewMessage] = useState("");

  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const { createNewMessage } = useFirebase({ newMessage, setNewMessage });

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "0px";

      const scrollHeight = textAreaRef.current.scrollHeight;
      textAreaRef.current.style.height = scrollHeight + "px";
    }
  }, [textAreaRef, newMessage]);

  const onEnterPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.keyCode == 13 && e.shiftKey == false) {
      e.preventDefault();
      createNewMessage();
    }
  };

  return (
    <Flex alignItems="center" justifyContent="center" mt="20px">
      <TextArea
        ref={textAreaRef}
        value={newMessage}
        onChange={e => setNewMessage(e.target.value)}
        placeholder="Send message..."
        autoFocus
        onKeyDown={onEnterPress}
      />
    </Flex>
  );
};

export default TextInput;
