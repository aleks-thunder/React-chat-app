import styled from "styled-components";

import { Flex } from "components";

export const SingleChatWrapper = styled(Flex)<{ isActive: boolean }>`
  margin: 1px 0px;
  padding: 10px;
  border-radius: ${({ theme }) => theme.radii.S};
  width: 100%;
  height: 60px;
  background-color: ${({ theme, isActive }) => (isActive ? theme.colors.primaryLight : theme.colors.grey)};
  border: ${({ theme, isActive }) => isActive && `1px solid ${theme.colors.black}`};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Image = styled.img`
  border-radius: ${({ theme }) => theme.radii.circle};
  height: 36px;
  width: 36px;
  background-color: transparent;
`;
