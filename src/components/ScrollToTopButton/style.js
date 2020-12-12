import styled from 'styled-components';

export const ScrollToTopButtonWrapper = styled.div`
  display: flex;
  position: fixed;
  background-color: var(--color-gray-dark);
  font-size: 2rem;
  right: 0;
  bottom: 0;
  width: 3rem;
  height: 3rem;
  margin: 1rem;
  justify-content: center;
  align-items: center;
  color: var(--color-white);
  border-radius: 50%;
  z-index: 999;
  cursor: pointer;
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 0.8;
  }

  opacity: ${({ isVisible }) => (isVisible ? '1' : '0 !important')};
`;
