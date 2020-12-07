import styled from 'styled-components';

export const ModalBackground = styled.div`
  position: fixed;
  top: ${({ isOpen }) => (isOpen ? '5rem' : '200%')};
  left: 0;
  height: calc(100vh - 5rem);
  width: 100%;
  background-color: ${({ isOpen }) =>
    isOpen
      ? 'var(--color-gray-darker-transparent)'
      : 'var(--color-transparent)'};
  transition: background-color 0.2s ease-in-out;
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: ${({ isOpen }) => (isOpen ? '5rem' : '200%')};
  width: 100%;
  height: calc(100vh - 5rem);
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  transition: top 0.2s ease-in-out;
  @media screen and (max-width: 500px) {
    padding: 1rem;
  }
`;

export const ModalContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  background-color: var(--color-white);
  max-height: 100%;
  max-width: 85%;
  position: relative;

  @media screen and (max-width: 1500px) {
    display: flex;
    flex-flow: column-reverse;
    max-width: 60%;
  }

  @media screen and (max-width: 1000px) {
    max-width: 70%;
  }

  @media screen and (max-width: 700px) {
    max-width: 85%;
  }

  @media screen and (max-width: 500px) {
    max-width: 100%;
  }
`;

export const ModalTextSectionContainer = styled.div`
  padding: 1.5rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  overflow-x: auto;
`;

export const ModalHeading = styled.p`
  font-size: 2rem;
  padding: 0.5rem 0;
  margin-bottom: 0.5rem;
  border-bottom: 2px solid var(--color-green);
  text-align: center;

  @media screen and (max-width: 600px) {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 400px) {
    font-size: 1.2rem;
  }
`;

export const ModalTextContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1;
  padding: 0.5rem 0;
`;

export const ModalText = styled.p`
  text-align: center;
  font-size: 1.2rem;
`;

export const ModalImageContainer = styled.div`
  width: 100%;
  padding-top: 65%;
  position: relative;
`;

export const ModalImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;

export const ModalCloseIconContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.8rem;
  height: 4rem;
  width: 4rem;
  padding: 0 0 1rem 1rem;
  cursor: pointer;
  color: var(--color-gray-dark);
`;
