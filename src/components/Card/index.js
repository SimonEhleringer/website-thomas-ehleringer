import React from 'react';
import {
  CardContainer,
  CardImageWrapper,
  CardImage,
  CardHeadingContainer,
  CardHeading,
} from './style';

const Card = ({ image, heading, onClick }) => {
  return (
    <CardContainer onClick={onClick}>
      <CardImageWrapper>
        <CardImage src={process.env.PUBLIC_URL + image}></CardImage>
      </CardImageWrapper>

      <CardHeadingContainer>
        <CardHeading>{heading}</CardHeading>
      </CardHeadingContainer>
    </CardContainer>
  );
};

export default Card;
