import styled from 'styled-components';

export const LeistungsangebotWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 0;
`;

export const LeistungsangebotParagraphContainer = styled.div`
  padding: 0 1.6rem;
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
