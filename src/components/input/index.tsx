import styled from "styled-components";

const Input = styled.input<{ width?: string }>`
  padding: 0px 10px;
  height: 44px;
  width: ${({ width }) => (width ? width : "100%")};
  color: ${({ theme }) => theme.colors.black};
  font-size: 24px;
  text-align: center;
  border-radius: ${({ theme }) => theme.radii.S};
  border: 1px solid ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.transparent};
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.white};
  }
  &:hover:not(:disabled) {
    border: 1px solid ${({ theme }) => theme.colors.grey};
  }

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.transparent};
    box-shadow: 0 0 5px 2px #4c3af7, 0 0 5px 2px #6f00ff, 0 0 5px 1px #0ff;
  }
`;

export default Input;
