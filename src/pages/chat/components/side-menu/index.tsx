import React, { FormEvent, useEffect, useState } from "react";

import { Box, Button, Flex, Input, Text } from "components";
import { SideMenuWrapper } from "./styled";
import { SingleChat } from "./components";

import { useFirebase } from "hooks";
import { useAppSelector } from "store/store";

const SideMenu: React.FC = () => {
  const [newChatName, setNewChatName] = useState("");
  const { chatList } = useAppSelector(state => state.chat);

  const { getChatList, onChatInput } = useFirebase({ newChatName });

  useEffect(() => {
    getChatList();
    return getChatList();
  }, []);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onChatInput();
  };

  return (
    <SideMenuWrapper p="20px" flexDirection="column" width="20vw" alignItems="center" minWidth="300px" height="100%">
      <Text textScale="header" color="white">
        Chats
      </Text>

      <Box my="20px">
        <Flex flexDirection="column">
          <form onSubmit={onSubmit}>
            <Input value={newChatName} onChange={e => setNewChatName(e.target.value)} />
            {/* TODO if not existing then show*/}
            <Button type="submit" width="100%" mt="12px">
              Join
            </Button>
          </form>
        </Flex>
      </Box>

      {chatList && chatList.map(chat => <SingleChat key={chat.id} item={chat} />)}
    </SideMenuWrapper>
  );
};

export default SideMenu;
