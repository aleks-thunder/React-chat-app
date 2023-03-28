import React from "react";

import { Box, Button, Flex, Page } from "components";
import { SideMenu, ChatArea } from "./components";

import { useAppSelector } from "store/store";

import { LOCAL_STORAGE_KEYS } from "configs";

const ChatPage: React.FC = () => {
  const { activeChat } = useAppSelector(state => state.chat);

  const handleLogout = () => {
    localStorage.removeItem(LOCAL_STORAGE_KEYS.token);
    window.location.reload();
  };

  return (
    <Page>
      <Flex height="100%" width="100%">
        <SideMenu />
        <Box position="absolute" right="20px" top="20px">
          <Button onClick={handleLogout}>Log out</Button>
        </Box>
        {activeChat && <ChatArea />}
      </Flex>
    </Page>
  );
};

export default ChatPage;
