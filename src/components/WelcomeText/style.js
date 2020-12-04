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
  padding: 3rem 0;
`;

export const WelcomeTextContainer = styled.div`
  width: 100%;
  max-width: 1500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WelcomeTextHeading = styled.h1`
  padding: .5rem 0;
  font-size: 3rem;
`;

export const WelcomeTextParagraph = styled.p`
  text-align: center;
  padding: .5rem 0;
  font-size: 1.2rem;
`;

export const WelcomeTextAddressJobTitleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 2rem 0;
  background-color: var(--color-gray-light);
`;

export const WelcomeTextAddressJobTitleContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
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
`;
