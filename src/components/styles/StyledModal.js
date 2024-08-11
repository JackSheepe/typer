import styled from "styled-components";

export const ModalWindowBlackout = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 50;
  background-color: rgba(var(--simple-black-rgb), 0.5);
`;

export const StyledModalWindow = styled.div`
  position: absolute;
  z-index: 100;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  background-color: var(--simple-white);
  border: 2px solid var(--decor-color);
  border-radius: 15px;
  padding: 1.5em;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 700px) {
    width: 70%;
  }
`;

export const ModalWindowText = styled.p`
  margin-bottom: 1.5em;
  font-size: 1.55rem;

  @media (min-width: 700px) {
    font-size: 2rem;
  }
`;
