import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { ROUTES } from "navigation/routes";

import { Button, Flex, Input, Page, Text } from "components";

const NewChat: React.FC = () => {
  const [chatName, setChatName] = useState("");

  const navigate = useNavigate();

  const onSubmit = () => {
    if (chatName) {
      navigate("/" + ROUTES.chat + "/" + chatName);
    }
  };

  return (
    <Page>
      <Flex flexDirection="column">
        <Text textScale="body" mb="40px" color="white" fontWeight="bold">
          Create new room or join already existing
        </Text>
        <form onSubmit={onSubmit}>
          <Input value={chatName} onChange={e => setChatName(e.target.value)} autoFocus />
          <Button type="submit" width="100%" mt="20px">
            Join
          </Button>
        </form>
      </Flex>
    </Page>
  );
};

export default NewChat;
