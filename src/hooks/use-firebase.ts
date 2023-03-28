import { useState } from "react";

import { addDoc, DocumentData, onSnapshot, orderBy, query, serverTimestamp, where } from "firebase/firestore";

import { FIREBASE } from "configs";

import { useAppDispatch, useAppSelector } from "store/store";
import { setActiveChat, setChatList } from "store/chat";

import { Message } from "types";

type useFireBaseProps = {
  newMessage?: string;
  newChatName?: string;
  setNewMessage?: React.Dispatch<React.SetStateAction<string>>;
};

const useFirebase = ({ newMessage, newChatName, setNewMessage }: useFireBaseProps) => {
  const dispatch = useAppDispatch();
  const { activeChat, chatList } = useAppSelector(state => state.chat);

  const [messageList, setMessageList] = useState<Message[]>([]);

  const getChatList = () => {
    const queryChats = query(FIREBASE.userCollection);

    onSnapshot(queryChats, snapshot => {
      let chats: any[] = [];
      snapshot.forEach((doc: any) => {
        chats.push({ ...doc.data(), id: doc.id });
      });

      dispatch(setChatList(chats));
    });
  };

  const onChatInput = async () => {
    if (newChatName && !chatList.map(chat => chat.room).includes(newChatName)) {
      dispatch(setActiveChat(newChatName));

      await addDoc(FIREBASE.userCollection, {
        room: newChatName,
        createdAt: serverTimestamp(),
        uid: FIREBASE.auth.currentUser?.uid,
      });
    }
  };

  const createNewMessage = async () => {
    if (newMessage === "") return;

    await addDoc(FIREBASE.messageCollection, {
      message: newMessage,
      createdAt: serverTimestamp(),
      // TODO isPrevMessageSameUID
      // isPrevMessageSameUID: FIREBASE.auth.currentUser?.uid === messages.at(-1)?.user.uid,
      user: {
        userName: FIREBASE.auth.currentUser?.displayName,
        photoURL: FIREBASE.auth.currentUser?.photoURL,
        uid: FIREBASE.auth.currentUser?.uid,
      },
      room: activeChat,
    });

    if (setNewMessage) {
      setNewMessage("");
    }
  };

  const getChatMessages = () => {
    if (activeChat) {
      const queryMessages = query(FIREBASE.messageCollection, where("room", "==", activeChat), orderBy("createdAt"));
      onSnapshot(queryMessages, snapshot => {
        let messages: Message[] = [];
        snapshot.forEach((doc: DocumentData) => {
          messages.push({ ...doc.data(), id: doc.id });
        });

        setMessageList(messages);
      });
    }
  };
  return { messageList, createNewMessage, getChatList, onChatInput, getChatMessages };
};

export default useFirebase;
