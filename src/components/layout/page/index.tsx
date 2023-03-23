import styled from "styled-components";

import { Flex } from "../flex";

// TODO
// const getBackground = ({ withBg }: { withBg?: boolean }) => {
//   if (withBg) {
//     return `
//       background: url("/images/background.png");
//       background-repeat: no-repeat;
//       background-size: 80%;
//       background-position: center;
//     `;
//   }
// };

export const Page = styled(Flex)`
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.background};
`;
