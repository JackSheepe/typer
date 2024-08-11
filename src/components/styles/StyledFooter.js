import styled from "styled-components";

export const StyledFooter = styled.footer`
  padding: 0 1.5em;
  text-align: center;
  padding: 1.5em 0;
  font-size: small;
  flex-shrink: 0;
  margin-bottom: 2%;

  @media (min-width: 700px) {
    padding: 0 3em;
  }
  @media (min-width: 1280px) {
    padding: 0 10em;
  }
`;
