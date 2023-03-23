import styled from "styled-components";
import { space, typography, layout, opacity, border, shadow, variant } from "styled-system";

import { Svg } from "components";

import { scaleVariants, variantStyles } from "./theme";

import { ButtonProps } from "./types";

const StyledButton = styled.button<ButtonProps>`
  border-radius: ${({ theme }) => theme.radii.M};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.white};

  height: 44px;
  padding: 14px 28px;
  position: relative;
  align-items: center;
  cursor: pointer;
  display: inline-flex;
  font-family: inherit;
  justify-content: center;
  line-height: 16px;
  outline: 0;
  font-size: 18px;
  transition: all 0.2s linear;
  width: fit-content;
  border: 0;

  ${variant({
    prop: "scale",
    variants: scaleVariants,
  })};

  ${Svg} {
    fill: ${({ theme }) => theme.colors.white};
  }

  ${({ theme, variant, color }) => variantStyles(theme, variant, color)};

  ${space}
  ${typography}
  ${layout}
  ${opacity}
  ${border}
  ${shadow}
`;

export default StyledButton;
