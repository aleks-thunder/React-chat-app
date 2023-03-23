import React from "react";

import { Flex, Page } from "components";
import { InputsArea, SideMenu, TextArea } from "./components";

const ChatPage = () => {
  return (
    <Page>
      <Flex>
        <SideMenu />
        <Flex flexDirection="column">
          <TextArea />
          <InputsArea />
        </Flex>
      </Flex>
    </Page>
  );
};

export default ChatPage;
