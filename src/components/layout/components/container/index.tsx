import styled from "styled-components";
import { border, layout, position, space } from "styled-system";

import { BoxProps, ThemedProps } from "../types";

export const getEllipsis = ({ ellipsis }: ThemedProps) => {
  if (ellipsis) {
    return `white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;`;
  }
};

export const Box = styled.div<BoxProps>`
  background-color: ${({ theme, $backgroundColor }) => $backgroundColor && theme.colors[$backgroundColor]};

  cursor: ${({ cursor }) => cursor && cursor};
  pointer-events: ${({ pointerEvents }) => pointerEvents && pointerEvents};

  ${getEllipsis}
  ${border}
  ${layout}
  ${position}
  ${space}
`;
