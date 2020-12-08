import styled from 'styled-components';

export const LeistungsangebotWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 0;
`;

export const LeistungsangebotHeading = styled.p`
  font-size: 2rem;
  border-bottom: 2px solid var(--color-green);
  padding: 0.5rem 0;
  margin-bottom: 0.5rem;

  @media screen and (max-width: 600px) {
    font-size: 1.8rem;
  }

  @media screen and (max-width: 400px) {
    font-size: 1.5rem;
  }
`;

export const LeistungsangebotContainer = styled.div`
  max-width: 1500px;
  width: 100%;
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;
