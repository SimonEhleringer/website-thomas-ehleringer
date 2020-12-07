import React from 'react';
import {
  CardContainer,
  CardImageWrapper,
  CardImage,
  CardHeadingContainer,
  CardHeading,
} from './style';

import Slider from '../Slider';

const Card = ({ image, heading, onClick }) => {
  return (
    <CardContainer onClick={onClick}>
      <CardImageWrapper>
        <CardImage src={image}></CardImage>
      </CardImageWrapper>

      <CardHeadingContainer>
        <CardHeading>{heading}</CardHeading>
      </CardHeadingContainer>
    </CardContainer>
  );
};

export default Card;
