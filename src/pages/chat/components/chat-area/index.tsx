import React, { useEffect, useRef } from "react";

import { SingleMessage, TextInput } from "./components";
import { ChatWrapper, MessagesWrapper } from "./styled";

import { useAppSelector } from "store/store";
import { useFirebase } from "hooks";

const ChatArea: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { activeChat } = useAppSelector(state => state.chat);

  const { messageList, getChatMessages } = useFirebase({});

  useEffect(() => {
    getChatMessages();
  }, [activeChat]);

  useEffect(() => {
    if (messageList && ref.current) {
      const element = ref.current;
      element.scroll({
        top: element.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [ref, messageList]);

  return (
    <ChatWrapper>
      <MessagesWrapper ref={ref}>
        {messageList.map(item => (
          <SingleMessage key={item.id} item={item} />
        ))}
      </MessagesWrapper>
      <TextInput />
    </ChatWrapper>
  );
};

export default ChatArea;
