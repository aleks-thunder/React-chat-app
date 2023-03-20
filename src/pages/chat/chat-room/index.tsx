import React, { useEffect, useState } from "react";

import {
  collection,
  addDoc,
  where,
  serverTimestamp,
  onSnapshot,
  query,
  orderBy,
  DocumentData,
} from "firebase/firestore";

import { FIREBASE } from "configs";
import { useParams } from "react-router-dom";

type Message = {
  avatar: string;
  createdAt: { seconds: number; nanoseconds: number };
  id: string;
  room: string;
  text: string;
  user: string;
};
const ChatRoom = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const messagesRef = collection(FIREBASE.db, "messages");

  const { room } = useParams();

  useEffect(() => {
    const queryMessages = query(messagesRef, where("room", "==", room), orderBy("createdAt"));
    const unsuscribe = onSnapshot(queryMessages, snapshot => {
      let messages: Message[] = [];
      snapshot.forEach((doc: DocumentData) => {
        messages.push({ ...doc.data(), id: doc.id });
      });

      setMessages(messages);
    });

    return () => unsuscribe();
  }, []);

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if (newMessage === "") return;
    await addDoc(messagesRef, {
      text: newMessage,
      createdAt: serverTimestamp(),
      user: FIREBASE.auth?.currentUser?.displayName,
      room,
    });

    setNewMessage("");
  };

  return (
    <div>
      <div>{room && <h1>Welcome to: {room.toUpperCase()}</h1>}</div>
      <div>
        {messages.map((message: any) => (
          <div key={message.id}>
            <span>{message.user}:</span> {message.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newMessage}
          onChange={event => setNewMessage(event.target.value)}
          placeholder="Type your message here..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatRoom;
