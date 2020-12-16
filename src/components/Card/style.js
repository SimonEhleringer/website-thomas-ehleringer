import styled from 'styled-components';

export const CardContainer = styled.div`
  margin: 0.5rem;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: 0.2s ease-in-out;
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

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

export const CardHeadingContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.5rem;
  align-items: center;
  flex-grow: 1;
  background-color: var(--color-white);
  min-height: 3.5rem;

  @media screen and (max-width: 600px) {
    min-height: 3rem;
  }

  @media screen and (max-width: 400px) {
    min-height: 2.5rem;
  }
`;

export const CardHeading = styled.h2`
  font-size: 1.3rem;
  text-align: center;
  font-weight: normal;

  @media screen and (max-width: 600px) {
    font-size: 1.1rem;
  }

  @media screen and (max-width: 400px) {
    font-size: 1rem;
  }
`;
