import styled from "styled-components";
import { Flex, Text } from "components";

export const StyledItem = styled(Flex)`
  margin: 5px 0px;
  flex-direction: column;
  z-index: 100;
`;

export const UserInfo = styled(Flex)`
  align-items: center;
  margin: 15px 0px 10px 0px;
  padding: 2px 10px 2px 4px;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  border-radius: ${({ theme }) => theme.radii.L};
`;

export const StyledText = styled(Text)`
  padding: 5px 10px;
  max-width: fit-content;
  background-color: ${({ theme }) => theme.colors.textMessage};
  border-radius: ${({ theme }) => theme.radii.S};
`;

export const Image = styled.img`
  border-radius: ${({ theme }) => theme.radii.circle};
  height: 36px;
  width: 36px;
`;
