import { FunctionComponent } from "react";
import {
  ModalWindowBlackout,
  StyledModalWindow,
  ModalWindowText,
} from "../styles/StyledModal";

type ModalWindowProps = {
  children: JSX.Element | JSX.Element[] | React.ReactNode;
  title: string;
};

const ModalWindow: FunctionComponent<ModalWindowProps> = ({
  children,
  title,
}) => {
  return (
    <ModalWindowBlackout>
      <StyledModalWindow>
        <ModalWindowText>{title}</ModalWindowText>
        {children}
      </StyledModalWindow>
    </ModalWindowBlackout>
  );
};

export default ModalWindow;
