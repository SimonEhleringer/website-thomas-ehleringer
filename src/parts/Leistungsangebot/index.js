import React from 'react';
import leistungsangebot from '../../assets/leistungsangebot';
import {
  LeistungsangebotWrapper,
  LeistungsangebotContainer,
  LeistungsangebotHeading,
} from './style';
import Card from '../../components/Card';

const Leistungsangebot = () => {
  const { heading, leistungsangebote } = leistungsangebot;

  return (
    <LeistungsangebotWrapper>
      <LeistungsangebotHeading>{heading}</LeistungsangebotHeading>

      <LeistungsangebotContainer>
        {leistungsangebote.map((leistung, index) => {
          const { heading, images } = leistung;

          return <Card key={index} images={images} heading={heading}></Card>;
        })}
      </LeistungsangebotContainer>
    </LeistungsangebotWrapper>
  );
};

export default Leistungsangebot;
