import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

import { where, onSnapshot, query, orderBy, DocumentData } from "firebase/firestore";

import { SingleMessage } from "./components";
import { MessageList } from "./styled";

import { FIREBASE } from "configs";

import { Message } from "./types";

const TextArea: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const { room } = useParams();

  useEffect(() => {
    const queryMessages = query(FIREBASE.messageCollection, where("room", "==", room), orderBy("createdAt"));
    const unsubscribe = onSnapshot(queryMessages, snapshot => {
      let messages: Message[] = [];
      snapshot.forEach((doc: DocumentData) => {
        messages.push({ ...doc.data(), id: doc.id });
      });

      setMessages(messages);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (messages && ref.current) {
      const element = ref.current;
      element.scroll({
        top: element.scrollHeight,
        left: 0,
        behavior: "smooth",
      });
    }
  }, [ref, messages]);

  return (
    <>
      <MessageList ref={ref}>
        {messages.map((item: any) => (
          <SingleMessage key={item.id} item={item} />
        ))}
      </MessageList>
    </>
  );
};

export default TextArea;
