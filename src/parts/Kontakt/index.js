import React from 'react';
import Wrapper from '../../components/Wrapper';
import kontakt from '../../assets/kontakt';
import Heading from '../../components/Heading';
import Container from '../../components/Container';
import { KontaktContainer, KontaktImgWrapper, KontaktImg, KontaktAddressJobtitleWrapper, KontaktAddress, KontaktAddressLine, KontaktJobTitleWrapper, KontaktJobTitle } from './style'

const Kontakt = () => {
  const { heading, image, address, jobTitle} = kontakt;

  return (
    <Wrapper>
      <Container>
        <Heading>{heading}</Heading>

        <KontaktContainer>
          <KontaktImgWrapper>
            <KontaktImg src={image}/>
          </KontaktImgWrapper>

          <KontaktAddressJobtitleWrapper>
            <KontaktAddress>
              {address.map((addressLine, index) => {
                return (
                  <KontaktAddressLine key={index}>
                    {addressLine}
                  </KontaktAddressLine>
                );
              })}
            </KontaktAddress>

            <KontaktJobTitleWrapper>
              <div>
              <KontaktJobTitle>{jobTitle}</KontaktJobTitle>
              </div>
              
            </KontaktJobTitleWrapper>
            </KontaktAddressJobtitleWrapper>
        </KontaktContainer>
      </Container>
    </Wrapper>
  );
};

export default Kontakt