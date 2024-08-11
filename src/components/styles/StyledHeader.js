import styled from "styled-components";

export const StyledHeader = styled.header`
  margin: 1em auto;
  flex-shrink: 0;

  @media (min-width: 700px) {
    margin-bottom: 5em;
  }

  @media (min-width: 1280px) {
    border-bottom: none;
    box-shadow: unset;
  }
`;

export const StyledHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
