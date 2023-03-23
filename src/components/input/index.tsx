import styled from "styled-components";

const Input = styled.input<{ width?: string }>`
  padding: 0px 30px 0px 10px;
  height: 44px;
  width: ${({ width }) => (width ? width : "100%")};
  font-size: 24px;
  text-align: center;
  border-radius: ${({ theme }) => theme.radii.S};
  border: 1px solid ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.transparent};
`;

export default Input;
