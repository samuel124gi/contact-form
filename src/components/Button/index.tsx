import React from "react";
import { ButtonVariant } from "../../types/component";
import { StyledButton } from "./styles";

interface ButtonProps {
  variant: ButtonVariant;
  onClick?: () => void;
  children?: React.ReactNode;
  label?: string;
}

const Button = ({ variant, onClick, children, label }: ButtonProps) => {
  return (
    <StyledButton variant={variant} onClick={onClick}>
      {children || label}
    </StyledButton>
  );
};

export default Button;
