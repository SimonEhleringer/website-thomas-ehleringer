import styled from 'styled-components';

export const CardContainer = styled.div`
  margin: 0.5rem;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  border-radius: 1rem;
  box-shadow: 0 4px 8px 2px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: scale(1.02);
  }
`;

export const CardImageWrapper = styled.div`
  width: 100%;
  padding-top: 65%;
  position: relative;
`;

export const CardImageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const CardHeadingContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.5rem;
  align-items: center;
  flex-grow: 1;
  background-color: var(--color-white);
`;

export const CardHeading = styled.p`
  font-size: 1.2rem;
  text-align: center;
  color: var(--color-gray-dark);
`;
