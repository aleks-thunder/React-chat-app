import styled from "styled-components";

import { Flex } from "components";

export const MessageList = styled(Flex)`
  padding: 15px;
  flex-direction: column;
  width: 60vw;
  border: 1px solid black;
  height: 65vh;
  overflow-y: scroll;
  border-radius: ${({ theme }) => theme.radii.S};
  background-repeat: no-repeat;
  background-size: 80%;
  background-position: center;
`;
