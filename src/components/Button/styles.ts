import styled from "@emotion/styled";
import { ButtonVariant } from "../../types/component";
import colors from "../../styles/colors";

export const StyledButton = styled.button<{ variant: ButtonVariant }>`
  width: 100%;
  height: 45px;
  background: ${colors.secondary02};
  border-radius: 8px;
  border: none;
  color: ${colors.white};
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background: ${colors.primary02};
  }
`;
