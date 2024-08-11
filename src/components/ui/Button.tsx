import { FunctionComponent, ComponentPropsWithoutRef } from "react";
import { StyledButton, DarkButton } from "../styles/StyledButton";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  btnText: string;
}

const Button: FunctionComponent<ButtonProps> = ({ btnText, ...props }) => {
  return (
    <StyledButton as={DarkButton} {...props}>
      {btnText}
    </StyledButton>
  );
};

export default Button;
