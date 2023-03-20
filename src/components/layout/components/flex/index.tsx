import styled from "styled-components";
import { flexbox } from "styled-system";

import { Box } from "../container";

import { FlexProps } from "../types";

export const Flex = styled(Box)<FlexProps>`
  display: flex;
  ${flexbox}
`;
