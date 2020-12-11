import React from 'react';
import Slider from '../../components/Slider';
import welcomeText from '../../assets/welcome-text';
import Heading from '../../components/Heading';
import { WillkommenWrapper } from './style';
import {
  WelcomeTextSection,
  WelcomeTextWrapper,
  WelcomeTextContainer,
  WelcomeTextParagraph,
  WelcomeTextAddressJobTitleWrapper,
  WelcomeTextAddressJobTitleContainer,
  WelcomeTextAddress,
  WelcomeTextAddressLine,
  WelcomeTextJobTitleWrapper,
  WelcomeTextJobTitle,
} from './style';
import willkommenImages from '../../assets/willkommen-images';

const Willkommen = () => {
  const { id, heading, paragraphs, address, jobTitle } = welcomeText;

  return (
    <>
      <WillkommenWrapper id={id}>
        <Slider images={willkommenImages} showText={true}></Slider>

        <WelcomeTextSection>
          <WelcomeTextWrapper>
            <WelcomeTextContainer>
              <Heading>{heading}</Heading>

              {paragraphs.map((p, index) => {
                return (
                  <WelcomeTextParagraph key={index}>{p}</WelcomeTextParagraph>
                );
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
      </WillkommenWrapper>
    </>
  );
};

export default Willkommen;
