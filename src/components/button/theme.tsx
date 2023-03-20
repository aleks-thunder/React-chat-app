import { css, DefaultTheme } from "styled-components";

import { Svg } from "components";

import { Colors } from "theme/types";

import { scales, Variant } from "./types";

export const variantStyles = (theme: DefaultTheme, variant: Variant = "primary", color: keyof Colors | undefined) => {
  return {
    primary: css`
      background-color: ${({ theme }) => (color ? theme.colors[color] : theme.colors.primary)};
      &:not([disabled]):hover {
        background-color: ${({ theme }) => (color ? theme.colors[color] : theme.colors.primaryLight)};
      }

      &:disabled {
        background-color: ${theme.colors.grey};
        cursor: not-allowed;
      }
    `,

    outline: css`
      background-color: ${({ theme }) => theme.colors.white};
      border: 1.5px solid ${({ theme }) => (color ? theme.colors[color] : theme.colors.black)};
      color: ${({ theme }) => (color ? theme.colors[color] : theme.colors.black)};

      &:not([disabled]):hover {
        background-color: ${({ theme }) => (color ? theme.colors[color] : theme.colors.primaryLight)};
        border: 1.5px solid ${theme.colors.primaryLight};
        color: ${theme.colors.white};
        ${Svg} {
          fill: ${theme.colors.white};
        }
      }

      &:disabled {
        opacity: 0.33;
        cursor: not-allowed;
      }
      ${Svg} {
        fill: ${({ theme }) => (color ? theme.colors[color] : theme.colors.black)};
      }
    `,
  }[variant];
};

export const scaleVariants = {
  [scales.MD]: {
    padding: "14px 28px",
    minWidth: 100,
  },
  [scales.SM]: {
    padding: "6px 16px",
    minWidth: 50,
  },
};
