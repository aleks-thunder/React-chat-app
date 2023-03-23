import styled from "styled-components";
import { space, typography, layout, opacity, flexbox } from "styled-system";
import { TextProps, ThemedProps } from "./types";
import { style } from "./theme";

export const getEllipsis = ({ ellipsis }: ThemedProps) => {
  if (ellipsis) {
    return `white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;`;
  }
};

const wordBreak = ({ wordBreak }: ThemedProps) => {
  if (wordBreak) {
    return `word-break: ${wordBreak};`;
  }
};

export const Text = styled.p<TextProps>`
  color: ${({ theme, color }) => (color ? theme.colors[color] : theme.colors.black)};
  font-weight: ${({ theme, fontWeight }) => (fontWeight ? theme.fontWeights[fontWeight] : theme.fontWeights.regular)};
  line-height: ${({ textScale }) => textScale && style[textScale].lineHeight};

  ${({ theme }) => theme.mediaQueries.mobileS} {
    font-size: ${({ textScale }) => textScale && style[textScale].fontSizeMobileS};
  }
  ${({ theme }) => theme.mediaQueries.tablet} {
    font-size: ${({ textScale }) => textScale && style[textScale].fontSizeTablet};
  }
  ${({ theme }) => theme.mediaQueries.laptop} {
    font-size: ${({ textScale }) => textScale && style[textScale].fontSizeLaptop};
  }

  ${wordBreak}
  ${getEllipsis}
  ${space}
  ${typography}
  ${layout}
  ${opacity}
  ${flexbox}
`;

export default Text;
