import React from "react";

import { Text } from "components";
import { UserSvg } from "components/svg";
import { Image, StyledItem, StyledText, UserInfo } from "./styled";

import { FIREBASE } from "configs";
import { Message } from "../../types";

const SingleMessage: React.FC<{ item: Message }> = ({ item }) => {
  const { isPrevMessageSameUID, user, message } = item;

  const currentUID = FIREBASE.auth.currentUser?.uid;

  return (
    <StyledItem alignItems={currentUID === user.uid ? "flex-end" : "flex-start"}>
      {isPrevMessageSameUID ||
        (currentUID !== user.uid && (
          <UserInfo alignItems="center" mt="15px" mb="10px">
            {user.photoURL ? <Image src={user.photoURL} /> : <UserSvg width="36px" height="36px" />}
            <Text ml="10px" textScale="caption" fontWeight="bold">
              {user.userName}
            </Text>
          </UserInfo>
        ))}
      <StyledText wordBreak="break-all" textScale="body">
        {message}
      </StyledText>
    </StyledItem>
  );
};

export default SingleMessage;
