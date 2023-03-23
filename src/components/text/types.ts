import { DefaultTheme } from "styled-components";
import { LayoutProps, SpaceProps, TypographyProps, OpacityProps, FlexboxProps } from "styled-system";

import { Colors, FontWeights } from "theme/types";

export interface ThemedProps extends TextProps {
  theme: DefaultTheme;
}

export const scales = {
  body: "body",
  caption: "caption",
  header: "header",
} as const;

export type Scales = (typeof scales)[keyof typeof scales];

export interface TextProps extends SpaceProps, TypographyProps, LayoutProps, OpacityProps, FlexboxProps {
  color?: keyof Colors;
  ellipsis?: boolean;
  fontWeight?: keyof FontWeights;
  textScale?: Scales;
  wordBreak?: React.CSSProperties["wordBreak"];
}
