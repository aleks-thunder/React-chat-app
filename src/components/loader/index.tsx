import React from "react";
import { LayoutProps } from "styled-system";

import { Flex } from "components";
import { SpinnerSvg } from "components/svg";

const Loader: React.FC<LayoutProps> = ({ ...props }) => {
  return (
    <Flex justifyContent="center" alignItems="center" height="100vh" {...props}>
      <SpinnerSvg width="44px" />
    </Flex>
  );
};

export default Loader;
