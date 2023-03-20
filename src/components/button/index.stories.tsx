import React from "react";

import { Button as StyledButton, Box, Flex } from "components";
import { variants, scales } from "./types";
import { AddIcon } from "components/svg";

export default {
  title: "Components/Button",
};

export const Button: React.FC = () => {
  return (
    <>
      <Box mb="32px">
        {Object.values(variants).map(variant => {
          return (
            <Box key={variant} mb="32px">
              {Object.values(scales).map(scale => {
                return (
                  <StyledButton key={scale} variant={variant} scale={scale} m="8px">
                    {`${variant} ${scale.toUpperCase()}`}
                  </StyledButton>
                );
              })}
            </Box>
          );
        })}
      </Box>

      <Flex mb="32px">
        <StyledButton mx="8px" isLoading>
          Loading
        </StyledButton>

        <StyledButton mx="8px" disabled>
          Disabled
        </StyledButton>

        <StyledButton mx="8px" variant="outline" disabled>
          Disabled
        </StyledButton>
      </Flex>

      <Box mb="32px">
        <StyledButton as="a" href="https://google.com" external mx="8px">
          External
        </StyledButton>

        <StyledButton color="red" mx="8px">
          Custom color
        </StyledButton>

        <StyledButton color="green" variant="outline" mx="8px">
          Custom color
        </StyledButton>
      </Box>

      <Box mb="32px">
        <StyledButton startIcon={<AddIcon />} mx="8px">
          With Icon
        </StyledButton>

        <StyledButton startIcon={<AddIcon />} variant="outline" mx="8px">
          With Icon
        </StyledButton>
      </Box>

      <Box mb="32px">
        <StyledButton disabled startIcon={<AddIcon />} mx="8px">
          Disabled With Icon
        </StyledButton>

        <StyledButton disabled startIcon={<AddIcon />} variant="outline" mx="8px">
          Disabled With Icon
        </StyledButton>
      </Box>
    </>
  );
};
