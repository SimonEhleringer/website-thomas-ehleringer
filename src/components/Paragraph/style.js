import styled from 'styled-components';

export const ParagraphComponent = styled.p`
  text-align: justify;
  padding: 0.5rem 0;
  font-size: 1.1rem;

  @media screen and (max-width: 600px) {
    font-size: 1rem;
    text-align: center;
  }

  @media screen and (max-width: 400px) {
    font-size: 0.9rem;
  }
`;
