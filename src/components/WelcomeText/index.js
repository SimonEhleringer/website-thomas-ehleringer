import React from 'react';
import welcomeText from '../../assets/welcome-text';
import {
  WelcomeTextSection,
  WelcomeTextContainer,
  WelcomeTextHeading,
  WelcomeTextParagraph,
  WelcomeTextAddress,
  WelcomeTextAddressLine,
  WelcomeTextJobTitle,
} from './style';

const WelcomeText = () => {
  const { heading, paragraphs, address, jobTitle } = welcomeText;

  return (
    <WelcomeTextSection>
      <WelcomeTextContainer>
        <WelcomeTextHeading>{heading}</WelcomeTextHeading>

        {paragraphs.map((p, index) => {
          return <WelcomeTextParagraph key={index}>{p}</WelcomeTextParagraph>;
        })}

        <WelcomeTextAddress>
          {address.map((addressLine, index) => {
            return (
              <WelcomeTextAddressLine key={index}>
                {addressLine}
              </WelcomeTextAddressLine>
            );
          })}
        </WelcomeTextAddress>

        <WelcomeTextJobTitle>{jobTitle}</WelcomeTextJobTitle>
      </WelcomeTextContainer>
    </WelcomeTextSection>
  );
};

export default WelcomeText;
