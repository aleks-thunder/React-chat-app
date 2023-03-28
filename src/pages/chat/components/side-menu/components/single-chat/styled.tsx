import styled from "styled-components";

import { Flex } from "components";

export const SingleChatWrapper = styled(Flex)<{ isActive: boolean }>`
  margin: 1px 0px;
  padding: 10px;
  border-radius: ${({ theme }) => theme.radii.S};
  width: 100%;
  height: 60px;
  background-color: ${({ theme, isActive }) => (isActive ? theme.colors.primary : theme.colors.grey)};
  cursor: pointer;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryLight};
  }
`;

export const Image = styled.img`
  border-radius: ${({ theme }) => theme.radii.circle};
  height: 36px;
  width: 36px;
  background-color: transparent;
`;
