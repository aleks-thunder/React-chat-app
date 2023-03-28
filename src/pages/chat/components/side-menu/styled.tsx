import styled from "styled-components";
import { Flex, Input } from "components";

export const SideMenuWrapper = styled(Flex)`
  padding: 20px;
  flex-direction: column;
  max-width: 415px;
  width: 20vw;
  align-items: center;
  min-width: 300px;
  height: 100%;
  border-right: 1px solid ${({ theme }) => theme.colors.grey};
`;

export const StyledInput = styled(Input)``;
