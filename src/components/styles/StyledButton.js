import styled from "styled-components";

const BaseButtonStyles = `
  display: block;
  cursor: pointer;
  font-family: inherit;
  font-size: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  padding: 0.5em 1.5em;
  border-radius: 7px;
	text-transform: uppercase;

  @media (min-width: 700px) {
    padding: 0.7em 2em;
		margin-left: auto;
  }
`;

export const BaseButton = styled.button`
  ${BaseButtonStyles}
`;

const DarkButtonAdditionalStyles = `
  color: var(--simple-white);
  background-color: var(--primary-dark);
  border: 2px solid transparent;
  transition: 0.2s linear;

  &:hover {
    color: var(--primary-dark);
    background-color: transparent;
    border: 2px solid var(--decor-color);
  }

  &:active {
    box-shadow: inset 2px 2px 5px 1px rgba(var(--primary-dark-rgb), 0.25);
  }
`;

export const DarkButton = styled(BaseButton)`
  ${DarkButtonAdditionalStyles}
`;

// Создание StyledButton, который может быть как BaseButton, так и DarkButton
export const StyledButton = styled(BaseButton)``;

StyledButton.defaultProps = {
  as: BaseButton,
};
