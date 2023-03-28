import React from "react";
import { Flex, Text } from "components";
import { Image, SingleChatWrapper } from "./styled";
import { UserSvg } from "components/svg";
import { useAppDispatch, useAppSelector } from "store/store";
import { setActiveChat } from "store/chat";

const SingleChat: React.FC<{ item: any }> = ({ item }) => {
  const { activeChat } = useAppSelector(state => state.chat);

  const dispatch = useAppDispatch();

  const onChatClick = () => {
    dispatch(setActiveChat(item.room));
  };

  return (
    <SingleChatWrapper isActive={activeChat === item.room} onClick={onChatClick}>
      {item.photoURL ? <Image src={item.photoURL} /> : <UserSvg width="36px" height="36px" />}
      <Flex flexDirection="column">
        <Text ml="10px" fontWeight="bold">
          {item.room}
        </Text>
        <Text ml="10px" textScale="caption" mt="2px">
          {item.room}
        </Text>
      </Flex>
    </SingleChatWrapper>
  );
};

export default SingleChat;
