import React from 'react';
import welcomeText from '../../assets/welcome-text';
import {
  WelcomeTextSection,
  WelcomeTextWrapper,
  WelcomeTextContainer,
  WelcomeTextHeading,
  WelcomeTextParagraph,
  WelcomeTextAddressJobTitleWrapper,
  WelcomeTextAddressJobTitleContainer,
  WelcomeTextAddress,
  WelcomeTextAddressLine,
  WelcomeTextJobTitleWrapper,
  WelcomeTextJobTitle
} from './style';

const WelcomeText = () => {
  const { heading, paragraphs, address, jobTitle } = welcomeText;

  return (
    <WelcomeTextSection>
      <WelcomeTextWrapper>
        <WelcomeTextContainer>
          <WelcomeTextHeading>{heading}</WelcomeTextHeading>

          {paragraphs.map((p, index) => {
            return <WelcomeTextParagraph key={index}>{p}</WelcomeTextParagraph>;
          })}
        </WelcomeTextContainer>
      </WelcomeTextWrapper>

      <WelcomeTextAddressJobTitleWrapper>
          <WelcomeTextAddressJobTitleContainer>
            <WelcomeTextAddress>
              {address.map((addressLine, index) => {
                return (
                  <WelcomeTextAddressLine key={index}>
                    {addressLine}
                  </WelcomeTextAddressLine>
                );
              })}
            </WelcomeTextAddress>

            <WelcomeTextJobTitleWrapper>
              <WelcomeTextJobTitle>{jobTitle}</WelcomeTextJobTitle>
            </WelcomeTextJobTitleWrapper>
          </WelcomeTextAddressJobTitleContainer>
        </WelcomeTextAddressJobTitleWrapper>
    </WelcomeTextSection>
  );
};

export default WelcomeText;
