import React from 'react';
import Wrapper from '../../components/Wrapper';
import kontakt from '../../assets/kontakt';
import Heading from '../../components/Heading';
import Container from '../../components/Container';
import {
  KontaktContainer,
  KontaktImgWrapper,
  KontaktImg,
  KontaktAddressJobtitleContainer,
  KontaktAddress,
  KontaktAddressLine,
  KontaktJobTitleWrapper,
  KontaktJobTitle,
} from './style';

const Kontakt = () => {
  const { id, heading, image, address, jobTitle } = kontakt;

  return (
    <Wrapper id={id}>
      <Container>
        <Heading>{heading}</Heading>

        <KontaktContainer>
          <KontaktImgWrapper>
            <KontaktImg src={process.env.PUBLIC_URL + image} />
          </KontaktImgWrapper>

          <KontaktAddressJobtitleContainer>
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
              <KontaktJobTitle>{jobTitle}</KontaktJobTitle>
            </KontaktJobTitleWrapper>
          </KontaktAddressJobtitleContainer>
        </KontaktContainer>
      </Container>
    </Wrapper>
  );
};

export default Kontakt;
