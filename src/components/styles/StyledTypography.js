import styled from "styled-components";

export const LargeHeader = styled.h1`
  font-family: var(--heading-font);
  letter-spacing: 1.2px;
  font-size: 2.25rem;

  @media (min-width: 700px) {
    font-size: 3rem;
    letter-spacing: 2.5px;
  }
`;

export const BigHeader = styled(LargeHeader).attrs({ as: "h2" })`
  font-size: 1.55rem;

  @media (min-width: 700px) {
    font-size: 2rem;
  }
`;

export const MidHeader = styled(LargeHeader).attrs({ as: "h3" })`
  font-size: 1.3rem;

  @media (min-width: 700px) {
    font-size: 1.5rem;
  }
`;

export const ErrorText = styled.span`
  color: var(--wrong-color);
  text-align: center;
  font-size: 2rem;
  line-height: 1.25em;
  text-transform: uppercase;
`;
