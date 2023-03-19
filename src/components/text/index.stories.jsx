import React from "react";
import { Text as StyledText } from "components";
import { scales } from "./types";

export default {
  title: "Components/Text",
};

export const Text = () => {
  return (
    <div>
      <StyledText mb="12px">Default</StyledText>

      {Object.values(scales).map((scale, i) => (
        <StyledText mb="12px" key={i} textScale={scale}>
          textScale: {scale}
        </StyledText>
      ))}

      <StyledText $fontWeight="bold" mb="12px">
        Bold StyledText
      </StyledText>

      <StyledText mb="12px" $fontWeight="medium">
        Medium StyledText
      </StyledText>

      <StyledText mb="12px" fontSize="12px">
        Small StyledText
      </StyledText>

      <StyledText mb="12px" color="red">
        Custom color from theme
      </StyledText>

      <StyledText mb="12px" textAlign="center">
        center
      </StyledText>

      <StyledText mb="12px" ellipsis width="100px">
        Ellipsis: a long StyledText with an ellipsis just for the example
      </StyledText>
      <StyledText mb="12px" fontSize={["12px", "16px", "22px"]}>
        Width media queries in markup as array
      </StyledText>
      <StyledText mb="12px" fontSize={{ mobileS: 14, mobileL: 18, tablet: 24 }}>
        Width media queries in markup as obj
      </StyledText>
    </div>
  );
};
