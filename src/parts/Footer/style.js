import styled from 'styled-components';

export const FooterWrapper = styled.div`
  background-color: var(--color-gray-dark);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

export const FooterContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(2, auto);
  }
`;

export const FooterText = styled.span`
  color: var(--color-white);
  font-size: 0.9rem;
  text-align: center;
`;

export const FooterTextSpan = styled.span`
  white-space: pre;
  text-align: center;
`;

export const FooterTextSpanDesigner = styled.span`
  color: var(--color-gray);
  font-size: 0.9rem;
  font-weight: bold;
  text-align: center;
`;
