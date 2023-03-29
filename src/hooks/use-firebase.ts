import { addDoc, DocumentData, onSnapshot, orderBy, query, serverTimestamp, where } from "firebase/firestore";

import { FIREBASE } from "configs";

import { useAppDispatch, useAppSelector } from "store/store";
import { setActiveChat, setChatList, setMessageList } from "store/chat";

import { Message } from "types";

type useFireBaseProps = {
  newMessage?: string;
  newChatName?: string;
  setNewMessage?: React.Dispatch<React.SetStateAction<string>>;
};

const useFirebase = ({ newMessage, newChatName, setNewMessage }: useFireBaseProps) => {
  const dispatch = useAppDispatch();
  const { activeChat, chatList } = useAppSelector(state => state.chat);

  const getChatList = () => {
    const queryChats = query(FIREBASE.userCollection);

    onSnapshot(queryChats, snapshot => {
      let chats: any[] = [];
      snapshot.forEach((doc: DocumentData) => {
        if (doc.data().uid === FIREBASE.auth.currentUser?.uid) {
          chats.push({ ...doc.data(), id: doc.id });
        }
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
      isPrevMessageSameUID: FIREBASE.auth.currentUser?.uid === activeChat.messageList.at(-1)?.user.uid,
      user: {
        userName: FIREBASE.auth.currentUser?.displayName,
        photoURL: FIREBASE.auth.currentUser?.photoURL,
        uid: FIREBASE.auth.currentUser?.uid,
      },
      room: activeChat.room,
    });

    if (setNewMessage) {
      setNewMessage("");
    }
  };

  const getChatMessages = () => {
    if (activeChat.room) {
      const queryMessages = query(
        FIREBASE.messageCollection,
        where("room", "==", activeChat.room),
        orderBy("createdAt"),
      );
      onSnapshot(queryMessages, snapshot => {
        let messages: Message[] = [];
        snapshot.forEach((doc: DocumentData) => {
          messages.push({ ...doc.data(), id: doc.id });
        });

        dispatch(setMessageList(messages));
      });
    }
  };
  return { createNewMessage, getChatList, onChatInput, getChatMessages };
};

export default useFirebase;
