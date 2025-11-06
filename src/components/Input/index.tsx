import { InputVariant } from "../../types/component";
import { StyledInput } from "./styles";
interface InputProps {
  type: InputVariant;
  placeholder?: string;
  value?: string;
  error?: boolean;
}

const Input = ({ type, placeholder, value, error, ...rest }: InputProps) => {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      value={value}
      {...rest}
      error={error}
    ></StyledInput>
  );
};

export default Input;
