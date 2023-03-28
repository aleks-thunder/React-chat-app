import React from "react";

import { Flex, Page } from "components";
import { SideMenu, ChatArea } from "./components";
import { useAppSelector } from "store/store";

const ChatPage = () => {
  const { activeChat } = useAppSelector(state => state.chat);
  return (
    <Page>
      <Flex height="100%" width="100%">
        <SideMenu />
        {activeChat && <ChatArea />}
      </Flex>
    </Page>
  );
};

export default ChatPage;
