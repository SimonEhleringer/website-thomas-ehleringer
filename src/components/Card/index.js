import React from 'react';
import {
  CardContainer,
  CardImageWrapper,
  CardImageContainer,
  CardHeadingContainer,
  CardHeading,
} from './style';

import Slider from '../Slider';

const Card = ({ images, heading }) => {
  return (
    <CardContainer>
      <CardImageWrapper>
        <CardImageContainer>
          <Slider images={images} showText={false}></Slider>
        </CardImageContainer>
      </CardImageWrapper>

      <CardHeadingContainer>
        <CardHeading>{heading}</CardHeading>
      </CardHeadingContainer>
    </CardContainer>
  );
};

export default Card;
