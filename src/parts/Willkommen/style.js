import styled from 'styled-components';

export const WillkommenWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 5rem);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 700px) {
    height: 110vh;
  }

  @media screen and (max-width: 350px) {
    height: 130vh;
  }
`;

export const WelcomeTextSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--color-white);
`;

export const WelcomeTextWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 1.5rem 0 2rem 0;
`;

export const WelcomeTextContainer = styled.div`
  width: 100%;
  max-width: 1500px;
  padding: 0 1.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WelcomeTextParagraph = styled.p`
  text-align: center;
  padding: 0.5rem 0;
  font-size: 1.3rem;

  @media screen and (max-width: 600px) {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 400px) {
    font-size: 1.1rem;
  }
`;

export const WelcomeTextAddressJobTitleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 1.5rem 0;
  background-color: var(--color-gray-light);
  border-top: 1px solid var(--color-gray);
  border-bottom: 1px solid var(--color-gray);
`;

export const WelcomeTextAddressJobTitleContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;

  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr;
    grid-gap: 1.5rem;
  }
`;

export const WelcomeTextAddress = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WelcomeTextAddressLine = styled.p`
  text-align: center;

  @media screen and (max-width: 400px) {
    font-size: 0.9rem;
  }
`;

export const WelcomeTextJobTitleWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const WelcomeTextJobTitle = styled.p`
  max-width: 300px;
  text-align: center;
  font-style: italic;

  @media screen and (max-width: 400px) {
    font-size: 0.9rem;
  }
`;
