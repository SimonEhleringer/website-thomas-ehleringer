import React, { useState, useEffect } from 'react';
import willkommenImages from '../../assets/willkommen-images';
import {
  SliderContainer,
  SliderImage,
  SliderImageTextsWrapper,
  SliderImageTextWrapper,
  SliderImageText,
} from './style';

const Slider = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [showTexts, setShowTexts] = useState(true);
  // const [areTextsFadingOut, setAreTextsFadingOut] = useState(false);

  useEffect(() => {
    const nextImage = () => {
      if (activeImageIndex === willkommenImages.length - 1) {
        setActiveImageIndex(0);
      } else {
        setActiveImageIndex(activeImageIndex + 1);
      }
    };

    const interval = setInterval(nextImage, 7000);

    return () => clearInterval(interval);
  }, [activeImageIndex]);

  useEffect(() => {
    setShowTexts(false);
    setTimeout(() => setShowTexts(true), 1);
    setTimeout(() => setShowTexts(false), 5499);
  }, [activeImageIndex]);

  return (
    <SliderContainer>
      <SliderImage
        img={willkommenImages[activeImageIndex].path}
        alt='test'
      ></SliderImage>

      <SliderImageTextsWrapper>
        {willkommenImages[activeImageIndex].texts.map((textObj, index) => {
          const { text, positionX, positionY } = textObj;

          return (
            <SliderImageTextWrapper
              key={index}
              show={showTexts}
              positionX={positionX}
              positionY={positionY}
            >
              <SliderImageText>{text}</SliderImageText>
            </SliderImageTextWrapper>
          );
        })}
      </SliderImageTextsWrapper>
    </SliderContainer>
  );
};

export default Slider;
