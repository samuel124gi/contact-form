import styled from "@emotion/styled";
import { InputVariant } from "../../types/component";
import colors from "../../styles/colors";
interface InputProps {
  type: InputVariant;
  error?: boolean;
}
export const StyledInput = styled.input<InputProps>`
  width: 100%;
  height: 40px;
  padding-left: 20px;
  border-radius: 8px;
  border: 1.5px solid ${({ error }) => (error ? "red" : "#2A4144")};
  color: ${colors.primary02};
  font-size: 18px;
  line-height: 150%;
  cursor: pointer;

  &:focus {
    border: 1.5px solid ${colors.secondary02};
    outline: none;
  }

  &:hover {
    border: 1.5px solid ${colors.secondary02};
  }
  ${({ type }) =>
    type === "radio" &&
    `
    width: 19.5px;
    height: 19.5px;
  `}

  ${({ type }) =>
    type === "checkbox" &&
    `
    width: 24px;
    height: 24px;
  `}
`;
