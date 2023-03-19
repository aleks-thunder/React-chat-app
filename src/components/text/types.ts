import { DefaultTheme } from "styled-components";
import { LayoutProps, SpaceProps, TypographyProps, OpacityProps, FlexboxProps } from "styled-system";

import { Colors, FontWeight } from "theme/types";

export interface ThemedProps extends TextProps {
  theme: DefaultTheme;
}

export const scales = {
  body: "body",
  caption: "caption",
  header: "header",
  button: "button",
} as const;

export type Scales = (typeof scales)[keyof typeof scales];

export interface TextProps extends SpaceProps, TypographyProps, LayoutProps, OpacityProps, FlexboxProps {
  color?: keyof Colors;
  ellipsis?: boolean;
  $fontWeight?: keyof FontWeight;
  textScale?: Scales;
  wordBreak?: React.CSSProperties["wordBreak"];
}
