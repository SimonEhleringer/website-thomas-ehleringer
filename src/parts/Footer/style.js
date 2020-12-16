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
  
  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(1, auto);
    grid-gap: 0.5rem;
  }
`;

export const FooterTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const FooterText = styled.span`
  color: var(--color-white);
  font-size: 0.9rem;
  text-align: center;
`;

export const FooterTextSpan = styled.span`
  white-space: pre;
  text-align: center;
  color: var(--color-white);

  @media screen and (max-width: 800px) {
    ${({ disableWhenSmall }) => disableWhenSmall && 'display: none;'}
  }
`;

export const FooterTextSpanDesigner = styled.span`
  color: var(--color-gray);
  font-size: 0.9rem;
  font-weight: bold;
  text-align: center;
`;
