import styled from "styled-components";

export const StatsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2em;
  padding: 1em;
  border-radius: 7px;
  flex-direction: column;
  text-align: center;

  @media (min-width: 700px) {
    padding: 2em;
    flex-direction: row;
    text-align: left;
  }
`;

export const StatTitle = styled.h3`
  font-family: var(--heading-font);
  letter-spacing: 1.2px;
  margin-bottom: 1em;
  font-size: 1.3rem;
  text-transform: uppercase;

  @media (min-width: 700px) {
    font-size: 1.5rem;
  }
`;

export const StatDesc = styled.p`
  text-transform: uppercase;
`;
