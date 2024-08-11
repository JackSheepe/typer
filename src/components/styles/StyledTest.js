import styled from "styled-components";

export const TestContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  margin-bottom: 2em;
`;

export const TestTextWrapper = styled.div`
  padding: 1em;
  border-radius: 7px;
  color: var(--primary-text);

  @media (min-width: 700px) {
    width: 100%;
    min-height: 100%;
    padding: 2em;
    display: grid;
    place-items: center;
  }
`;

export const TestLoadingText = styled.span`
  padding-top: 50px;
`;
