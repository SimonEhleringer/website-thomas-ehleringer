import styled from 'styled-components';

export const WelcomeTextSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
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
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WelcomeTextHeading = styled.p`
  padding: 0.5rem 0;
  font-size: 2rem;
  border-bottom: 2px solid var(--color-green);
  margin-bottom: 0.5rem;
  color: var(--color-gray-darker);
  text-align: center;
`;

export const WelcomeTextParagraph = styled.p`
  text-align: center;
  padding: 0.5rem 0;
  font-size: 1.3rem;
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
`;

export const WelcomeTextJobTitleWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const WelcomeTextJobTitle = styled.p`
  max-width: 300px;
  text-align: center;
  font-style: italic;
`;
