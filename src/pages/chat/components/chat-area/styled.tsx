import styled from "styled-components";

import { Flex } from "components";

export const ChatWrapper = styled(Flex)`
  margin: 40px;
  margin-top: 50px;
  padding: 15px;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  border-radius: ${({ theme }) => theme.radii.S};
  background: ${({ theme }) => theme.gradients.chat};
`;

export const MessagesWrapper = styled(Flex)`
  padding: 10px;
  flex-direction: column;
  overflow-y: scroll;
`;
