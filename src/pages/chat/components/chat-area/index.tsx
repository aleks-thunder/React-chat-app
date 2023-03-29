import React, { useEffect, useRef } from "react";

import { SingleMessage, TextInput } from "./components";
import { ChatWrapper, MessagesWrapper } from "./styled";

import { useAppSelector } from "store/store";

import { useFirebase } from "hooks";

const ChatArea: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { activeChat } = useAppSelector(state => state.chat);

  const { getChatMessages } = useFirebase({});

  useEffect(() => {
    getChatMessages();
  }, [activeChat.room]);

  useEffect(() => {
    if (activeChat.messageList && ref.current) {
      const element = ref.current;
      element.scroll({
        top: element.scrollHeight,
      });
    }
  }, [ref, activeChat.messageList]);

  return (
    <ChatWrapper>
      <MessagesWrapper ref={ref}>
        {activeChat.messageList.map(item => (
          <SingleMessage key={item.id} item={item} />
        ))}
      </MessagesWrapper>
      <TextInput />
    </ChatWrapper>
  );
};

export default ChatArea;
