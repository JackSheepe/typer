import { FunctionComponent } from "react";
import { StyledHeader, StyledHeaderContainer } from "../styles/StyledHeader";
import { LargeHeader } from "../styles/StyledTypography";

const Header: FunctionComponent = () => {
  return (
    <StyledHeader>
      <StyledHeaderContainer className="header-container">
        <LargeHeader>Typing Test</LargeHeader>
      </StyledHeaderContainer>
    </StyledHeader>
  );
};

export default Header;
