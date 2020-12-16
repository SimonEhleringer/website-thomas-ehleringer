import styled from 'styled-components';

export const ImpressumH2 = styled.h2`
  font-size: 1.5rem;
  padding: 0.5rem;
  text-align: center;
  font-weight: 600;

  @media screen and (max-width: 600px) {
    font-size: 1.3rem;
  }

  @media screen and (max-width: 400px) {
    font-size: 1.1rem;
  }
`;

export const ImpressumH3 = styled.h3`
  font-size: 1.3rem;
  padding: 0.5rem;
  text-align: center;
  font-weight: 600;

  @media screen and (max-width: 600px) {
    font-size: 1.1rem;
  }

  @media screen and (max-width: 400px) {
    font-size: 1rem;
  }
`;

export const ImpressumParagraph = styled.p`
  text-align: center;
  padding: 0.5rem 0;

  @media screen and (max-width: 600px) {
    font-size: 0.9rem;
  }
`;
