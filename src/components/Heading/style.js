import styled from 'styled-components';

export const HeadingComponent = styled.h1`
  padding: 0.5rem 0;
  font-size: 2rem;
  border-bottom: 2px solid var(--color-green);
  margin-bottom: 0.5rem;
  color: var(--color-gray-darker);
  text-align: center;
  font-weight: normal;

  @media screen and (max-width: 600px) {
    font-size: 1.8rem;
  }

  @media screen and (max-width: 400px) {
    font-size: 1.5rem;
  }
`;
