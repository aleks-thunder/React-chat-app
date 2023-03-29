import React from "react";

import { Flex, Text } from "components";
import { Image, SingleChatWrapper } from "./styled";
import { UserSvg } from "components/svg";

import { useAppDispatch, useAppSelector } from "store/store";
import { setActiveChat } from "store/chat";

import { ChatItem } from "store/chat/types";

const SingleChat: React.FC<{ item: ChatItem }> = ({ item }) => {
  const { activeChat } = useAppSelector(state => state.chat);

  const dispatch = useAppDispatch();

  const onChatClick = () => {
    dispatch(setActiveChat(item.room));
  };

  return (
    <SingleChatWrapper isActive={activeChat.room === item.room} onClick={onChatClick}>
      {item.chatPhoto ? <Image src={item.chatPhoto} /> : <UserSvg width="36px" height="36px" />}
      <Flex flexDirection="column">
        <Text ml="10px" fontWeight="bold">
          {item.room}
        </Text>
      </Flex>
    </SingleChatWrapper>
  );
};

export default SingleChat;
