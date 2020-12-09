import styled from 'styled-components';

export const BulletPointComponent = styled.p`
  padding: 0.5rem;
  font-size: 1.2rem;
  text-align: center;

  @media screen and (max-width: 600px) {
    font-size: 1.1rem;
  }

  @media screen and (max-width: 400px) {
    font-size: 1rem;
  }
`;
