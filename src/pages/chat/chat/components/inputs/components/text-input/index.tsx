import React, { FormEvent, useState } from "react";
import { useParams } from "react-router-dom";

import { addDoc, serverTimestamp } from "firebase/firestore";

import { Button, Flex, Input } from "components";
import { MessageSvg } from "components/svg";

import { FIREBASE } from "configs";

import { Message } from "../../../text-area/types";

const TextInput: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const { room } = useParams();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newMessage === "") return;

    await addDoc(FIREBASE.messageCollection, {
      message: newMessage,
      createdAt: serverTimestamp(),
      // TODO isPrevMessageSameUID
      isPrevMessageSameUID: FIREBASE.auth.currentUser?.uid === messages.at(-1)?.user.uid,
      user: {
        userName: FIREBASE.auth.currentUser?.displayName,
        photoURL: FIREBASE.auth.currentUser?.photoURL,
        uid: FIREBASE.auth.currentUser?.uid,
      },
      room,
    });

    setNewMessage("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Flex alignItems="center" justifyContent="center" mr="-40px" mt="20px">
          <Input
            width="100%"
            value={newMessage}
            onChange={e => setNewMessage(e.target.value)}
            placeholder="Send message..."
            autoFocus
          />
          <Flex position="relative" left="-44px">
            <Button type="submit" variant="outline" height="30px" p="0px" minWidth="40px">
              <MessageSvg width="24px" height="24px" />
            </Button>
          </Flex>
        </Flex>
      </form>
    </>
  );
};

export default TextInput;
