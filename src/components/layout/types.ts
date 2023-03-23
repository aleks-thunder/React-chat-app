import React, { HTMLAttributes, PropsWithChildren } from "react";
import { DefaultTheme } from "styled-components";

import { BorderProps, FlexboxProps, LayoutProps, PositionProps, SpaceProps } from "styled-system";
import { Colors } from "theme/types";

export interface BoxProps extends BorderProps, LayoutProps, PositionProps, SpaceProps, HTMLAttributes<HTMLDivElement> {
  $backgroundColor?: keyof Colors;
  ellipsis?: boolean;
  cursor?: React.CSSProperties["cursor"];
  pointerEvents?: React.CSSProperties["pointerEvents"];
}

export interface FlexProps extends BoxProps, FlexboxProps {}

export interface ThemedProps extends BoxProps {
  theme: DefaultTheme;
}
